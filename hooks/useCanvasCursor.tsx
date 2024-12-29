'use client';
import { useEffect } from 'react';

export const useCanvasCursor = () => {
  function Oscillator(options: any) {
    this.init(options || {});
  }

  Oscillator.prototype = {
    init: function (options: any) {
      this.phase = options.phase || 0;
      this.offset = options.offset || 0;
      this.frequency = options.frequency || 0.001;
      this.amplitude = options.amplitude || 1;
    },
    update: function () {
      this.phase += this.frequency;
      return this.offset + Math.sin(this.phase) * this.amplitude;
    }
  };

  function Node() {
    this.x = 0;
    this.y = 0;
    this.vy = 0;
    this.vx = 0;
  }

  const CONFIG = {
    friction: 0.5,
    trails: 20,
    size: 50,
    dampening: 0.25,
    tension: 0.98,
  };

  let ctx: any;
  let oscillator: any;
  let pos: any = {};
  let lines: any[] = [];

  function Line(options: any) {
    this.init(options || {});
  }

  Line.prototype = {
    init: function (options: any) {
      this.spring = options.spring + 0.1 * Math.random() - 0.05;
      this.friction = CONFIG.friction + 0.01 * Math.random() - 0.005;
      this.nodes = [];
      for (let i = 0; i < CONFIG.size; i++) {
        const node = new Node();
        node.x = pos.x;
        node.y = pos.y;
        this.nodes.push(node);
      }
    },
    update: function () {
      let spring = this.spring;
      let node = this.nodes[0];

      node.vx += (pos.x - node.x) * spring;
      node.vy += (pos.y - node.y) * spring;

      for (let i = 0; i < this.nodes.length; i++) {
        node = this.nodes[i];

        if (i > 0) {
          const prev = this.nodes[i - 1];
          node.vx += (prev.x - node.x) * spring;
          node.vy += (prev.y - node.y) * spring;
          node.vx += prev.vx * CONFIG.dampening;
          node.vy += prev.vy * CONFIG.dampening;
        }

        node.vx *= this.friction;
        node.vy *= this.friction;
        node.x += node.vx;
        node.y += node.vy;

        spring *= CONFIG.tension;
      }
    },
    draw: function () {
      let x = this.nodes[0].x,
        y = this.nodes[0].y;

      ctx.beginPath();
      ctx.moveTo(x, y);

      for (let i = 1; i < this.nodes.length - 2; i++) {
        const curr = this.nodes[i];
        const next = this.nodes[i + 1];
        x = (curr.x + next.x) * 0.5;
        y = (curr.y + next.y) * 0.5;
        ctx.quadraticCurveTo(curr.x, curr.y, x, y);
      }

      const i = this.nodes.length - 2;
      const curr = this.nodes[i];
      const next = this.nodes[i + 1];
      ctx.quadraticCurveTo(curr.x, curr.y, next.x, next.y);
      ctx.stroke();
      ctx.closePath();
    }
  };

  function initLines() {
    lines = [];
    for (let i = 0; i < CONFIG.trails; i++) {
      lines.push(
        new Line({
          spring: 0.45 + (i / CONFIG.trails) * 0.025
        })
      );
    }
  }

  function handlePointer(e: any) {
    if (e.touches) {
      pos.x = e.touches[0].pageX;
      pos.y = e.touches[0].pageY;
    } else {
      pos.x = e.clientX;
      pos.y = e.clientY;
    }
    e.preventDefault();
  }

  function handleTouchStart(e: any) {
    if (e.touches.length === 1) {
      pos.x = e.touches[0].pageX;
      pos.y = e.touches[0].pageY;
    }
  }

  function render() {
    if (!ctx?.running) return;

    ctx.globalCompositeOperation = 'source-over';
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.globalCompositeOperation = 'lighter';
    ctx.strokeStyle = `hsla(${Math.round(oscillator.update())},50%,50%,0.25)`;
    ctx.lineWidth = 1;

    for (let i = 0; i < CONFIG.trails; i++) {
      const line = lines[i];
      line.update();
      line.draw();
    }

    ctx.frame++;
    window.requestAnimationFrame(render);
  }

  function resizeCanvas() {
    if (!ctx?.canvas) return;
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
  }

  function startAnimation(e: any) {
    document.removeEventListener('mousemove', startAnimation);
    document.removeEventListener('touchstart', startAnimation);
    document.addEventListener('mousemove', handlePointer);
    document.addEventListener('touchmove', handlePointer);
    document.addEventListener('touchstart', handleTouchStart);
    handlePointer(e);
    initLines();
    render();
  }

  useEffect(() => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    if (!canvas) return;

    ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.running = true;
    ctx.frame = 1;

    oscillator = new Oscillator({
      phase: Math.random() * 2 * Math.PI,
      amplitude: 85,
      frequency: 0.0015,
      offset: 285,
    });

    document.addEventListener('mousemove', startAnimation);
    document.addEventListener('touchstart', startAnimation);
    document.body.addEventListener('orientationchange', resizeCanvas);
    window.addEventListener('resize', resizeCanvas);

    window.addEventListener('focus', () => {
      if (!ctx.running) {
        ctx.running = true;
        render();
      }
    });

    window.addEventListener('blur', () => {
      ctx.running = true;
    });

    resizeCanvas();

    return () => {
      if (ctx) ctx.running = false;
      document.removeEventListener('mousemove', startAnimation);
      document.removeEventListener('touchstart', startAnimation);
      document.removeEventListener('mousemove', handlePointer);
      document.removeEventListener('touchmove', handlePointer);
      document.removeEventListener('touchstart', handleTouchStart);
      document.body.removeEventListener('orientationchange', resizeCanvas);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('focus', () => { });
      window.removeEventListener('blur', () => { });
    };
  }, []);
};
