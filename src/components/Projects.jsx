import React from "react"
import { CardImage } from "./CardImage"

function Projects() {
  return (
    <div
      id="projects"
      className="min-h-screen px-40 py-20 flex flex-col gap-10"
    >
      {/* Heading */}
      <div>
        <h1 className="text-5xl font-extrabold text-blue-800 mb-3">
          My Projects
        </h1>
        <p className="text-blue-800 text-lg">
          Here are some of my projects
        </p>
      </div>

      {/* Cards section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <CardImage />
        <CardImage />
        <CardImage />
      </div>
    </div>
  )
}

export default Projects
