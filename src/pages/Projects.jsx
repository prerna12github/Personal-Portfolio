import { ProjectCard } from "@/components/ProjectCard"
import { useProjects } from "@/hooks/useProjects"

export default function Projects() {
    console.log("🚀 Projects component rendered")

  const { projects, loading } = useProjects()

  if (loading) return <p>Loading...</p>

  return (
    <div className="grid grid-cols-3 gap-6">
      {projects.map((p) => (
        <ProjectCard key={p.id} {...p} />
      ))}
    </div>
  )
}
