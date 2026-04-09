import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function CardImage({ project }) {
  const handleViewProject = () => {
    if (project?.project_url) {
      window.open(project.project_url, '_blank', 'noopener,noreferrer');
    } else {
      alert(`Project "${project?.title || 'Unknown'}" coming soon!`);
    }
  };

  const techStack = project?.tech_stack || [];

  return (
    <Card className="group relative w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-800/60 to-slate-900/60 backdrop-blur-xl shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-500/40">

      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={project?.image_url || "src/assets/image.png"}
          alt={project?.title || "Project cover"}
          className="h-52 w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Shine effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

        {/* Featured Badge */}
        {project?.featured && (
          <div className="absolute top-4 right-4">
            <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-orange-500/30 border-0 px-3 py-1 text-xs font-semibold">
              <span className="mr-1">⭐</span> Featured
            </Badge>
          </div>
        )}

        {/* View overlay button on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            Click to view project →
          </div>
        </div>
      </div>

      {/* Content */}
      <CardHeader className="space-y-3 pb-4">
        <CardTitle className="text-xl font-bold tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-300 group-hover:to-purple-300 transition-all duration-300">
          {project?.title || "Project Title"}
        </CardTitle>
        <CardDescription className="text-sm text-gray-400 line-clamp-3 leading-relaxed">
          {project?.description || "Project description goes here."}
        </CardDescription>
      </CardHeader>

      {/* Tech Stack Tags */}
      {techStack.length > 0 && (
        <div className="px-6 pb-4">
          <div className="flex flex-wrap gap-2">
            {techStack.slice(0, 4).map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-purple-500/10 text-purple-300 border border-purple-500/20 text-xs font-medium px-2.5 py-0.5 hover:bg-purple-500/20 hover:border-purple-500/40 transition-colors duration-200"
              >
                {tech}
              </Badge>
            ))}
            {techStack.length > 4 && (
              <Badge
                variant="secondary"
                className="bg-white/5 text-gray-400 border border-white/10 text-xs font-medium px-2.5 py-0.5"
              >
                +{techStack.length - 4} more
              </Badge>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <CardFooter className="pt-2 pb-6 px-6">
        <Button
          onClick={handleViewProject}
          className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-md transition-all duration-300 hover:from-violet-700 hover:to-purple-700 hover:shadow-lg hover:shadow-purple-500/40 hover:scale-[1.02] cursor-pointer font-semibold py-5"
        >
          <span>View Project</span>
          <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Button>
      </CardFooter>
    </Card>
  )
}
