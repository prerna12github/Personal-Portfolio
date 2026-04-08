import { useEffect, useState } from "react"
import { CardImage } from "./CardImage"

const Projects = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false })

      console.log("SUPABASE DATA 👉", data)
      console.log("SUPABASE ERROR 👉", error)

      if (!error) setProjects(data)
    }

    fetchProjects()
  }, [])

  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center p-10 bg-purple-950/20">
      <h2 className="text-4xl md:text-5xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">My Projects</h2>
      <p className="text-gray-400 mb-12 text-lg">
        Here are some of my projects
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(project => (
          <CardImage key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
