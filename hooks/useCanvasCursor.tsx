'use client';
import { useEffect } from 'react';

export const useCanvasCursor = () => {
  type OscillatorOptions = {
    phase?: number;
    offset?: number;
    frequency?: number;
    amplitude?: number;
  };

  class Oscillator {
    phase: number;
    offset: number;
    frequency: number;
    amplitude: number;

    constructor(options: OscillatorOptions = {}) {
      this.phase = options.phase || 0;
      this.offset = options.offset || 0;
      this.frequency = options.frequency || 0.001;
      this.amplitude = options.amplitude || 1;
    }

    update() {
      this.phase += this.frequency;
      return this.offset + Math.sin(this.phase) * this.amplitude;
    }
  }

  class Node {
    x: number;
    y: number;
    vx: number;
    vy: number;

    constructor() {
      this.x = 0;
      this.y = 0;
      this.vx = 0;
      this.vy = 0;
    }
  }

  type LineOptions = {
    spring: number;
  };

  class Line {
    spring: number;
    friction: number;
    nodes: Node[];

    constructor(options: LineOptions) {
      this.spring = options.spring + 0.1 * Math.random() - 0.05;
      this.friction = CONFIG.friction + 0.01 * Math.random() - 0.005;
      this.nodes = Array.from({ length: CONFIG.size }, () => {
        const node = new Node();
        node.x = pos.x;
        node.y = pos.y;
        return node;
      });
    }

    update() {
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
    }

    draw(ctx: CanvasRenderingContext2D) {
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
  }

  const CONFIG = {
    friction: 0.5,
    trails: 20,
    size: 50,
    dampening: 0.25,
    tension: 0.98,
  };

  let ctx: CanvasRenderingContext2D | null;
  let oscillator: Oscillator;
  const pos = { x: 0, y: 0 };
  let lines: Line[] = [];

  function initLines() {
    lines = Array.from({ length: CONFIG.trails }, (_, i) => {
      return new Line({
        spring: 0.45 + (i / CONFIG.trails) * 0.025,
      });
    });
  }

  function handlePointer(e: MouseEvent | TouchEvent) {
    if ('touches' in e) {
      pos.x = e.touches[0].pageX;
      pos.y = e.touches[0].pageY;
    } else {
      pos.x = e.clientX;
      pos.y = e.clientY;
    }
    e.preventDefault();
  }

  function resizeCanvas() {
    if (!ctx || !ctx.canvas) return;
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
  }

  function render() {
    if (!ctx) return;

    ctx.globalCompositeOperation = 'source-over';
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.globalCompositeOperation = 'lighter';
    ctx.strokeStyle = `hsla(${Math.round(oscillator.update())},50%,50%,0.25)`;
    ctx.lineWidth = 1;

    for (const line of lines) {
      line.update();
      line.draw(ctx);
    }

    requestAnimationFrame(render);
  }

  function startAnimation(e: MouseEvent | TouchEvent) {
    document.removeEventListener('mousemove', startAnimation);
    document.removeEventListener('touchstart', startAnimation);
    document.addEventListener('mousemove', handlePointer);
    document.addEventListener('touchmove', handlePointer);
    initLines();
    render();
  }

  useEffect(() => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement | null;
    if (!canvas) return;

    ctx = canvas.getContext('2d');
    if (!ctx) return;

    oscillator = new Oscillator({
      phase: Math.random() * 2 * Math.PI,
      amplitude: 85,
      frequency: 0.0015,
      offset: 285,
    });

    document.addEventListener('mousemove', startAnimation);
    document.addEventListener('touchstart', startAnimation);
    window.addEventListener('resize', resizeCanvas);

    resizeCanvas();

    return () => {
      document.removeEventListener('mousemove', startAnimation);
      document.removeEventListener('touchstart', startAnimation);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
};
