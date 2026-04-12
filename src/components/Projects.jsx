import { useState, useMemo } from "react"
import { CardImage } from "./CardImage"

// ─── Edit your projects here ────────────────────────────────────────────────
const projectsData = [
  {
    id: 1,
    title: "FreeStore",
    description: "A simple and modern photo storage web app that lets users securely store their personal images using Google Drive integration.",
    image_url: "/freestore.png",
    project_url: "https://github.com/prerna12github/FreeStore",
    tech_stack: ["React", "Tailwind CSS", "Vite","Google OAUth 2.0"],
    featured: true,
  },
  {
    id: 2,
    title: "Weather App",
    description: "A modern and responsive Weather Application which fetches real-time weather details using the OpenWeatherMap API and displays temperature, humidity, wind speed, and weather icons.",
    image_url: "/weather.png",
    project_url: "https://github.com/prerna12github/my-weather-app",
    tech_stack: ["TypeScript", "React", "TailwindCSS","WeatherAPI"],
    featured: false,
  },
  {
    id: 3,
    title: "TO-DO List",
    description: "A simple and aesthetic To-Do List application that supports task persistence using localStorage, check & strike functionality, icon-based actions, and soft glow UI effects",
    image_url: "/todo.png",
    project_url: "https://github.com/prerna12github/TO-DO-List",
    tech_stack: ["TypeScript", "React", "TailwindCSS","React Icons"],
    featured: false,
  },
]
// ─────────────────────────────────────────────────────────────────────────────

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All")

  const filters = useMemo(
    () => ["All", ...new Set(projectsData.flatMap((p) => p.tech_stack || []))],
    []
  )

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((p) => (p.tech_stack || []).includes(activeFilter))

  return (
    <section id="projects" className="relative min-h-screen py-24 px-4 md:px-10 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/10 via-transparent to-purple-950/10 pointer-events-none" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-blob pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/15 rounded-full blur-3xl animate-blob animation-delay-2000 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-blob animation-delay-4000 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-4 py-2 order-purple-500/20 mb-6">
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 animate-gradient">
            My Projects
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            A showcase of my work, experiments, and creative solutions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-500 mx-auto mt-6 rounded-full" />
        </div>

       

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardImage project={project} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-gray-400 text-lg">No projects found for this filter</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
