"use client"

import { GithubIcon, LinkIcon } from "@/app/EntireStack/Icons"
import React from "react"

const Projects = () => {
  return (
    <div className="h-[120vh]">
      <div className="pt-24 ml-14">
        <h1 className="relative text-6xl font-mono font-extrabold tracking-wider max-w-[630px] animate-in fade-in duration-1000
    text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-slate-300 to-slate-400
    drop-shadow-[0_4px_3px_rgba(0,0,0,0.5)]
    after:content-[''] after:absolute after:inset-0 
    after:bg-gradient-to-r after:from-slate-200/10 after:via-slate-300/10 after:to-slate-400/10 
    after:blur-lg after:-z-10">
          Notable Projects
        </h1>
      </div>
      <div>
        <Component Cover={<img src="/image.png" className="w-auto rounded-t-2xl h-80" />} />
      </div>
    </div>
  )
}

const Component = ({ Cover, Title, Description, LiveLink, GithubLink }: {
  Cover?: React.ReactNode,
  Title?: string,
  Description?: string,
  LiveLink?: string,
  GithubLink?: string,
}) => {
  return (
    <div className="h-[80vh] rounded-2xl w-max bg-gray-500">
      <div>
        {Cover}
        {Title}
        {Description}
        {LiveLink}
        {GithubLink}
      </div>
      <div className="flex gap-2">
        <GithubIcon />
        <LinkIcon />
      </div>

    </div>
  )
}

export default Projects
