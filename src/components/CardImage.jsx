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

  return (
    <Card className="group relative w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-slate-800/50 backdrop-blur-xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-purple-500/30">

      {/* Image */}
      <div className="relative">
        <img
          src={project?.image_url || "src/assets/image.png"}
          alt={project?.title || "Project cover"}
          className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

        {/* Badge */}
        <div className="absolute top-4 right-4">
          <Badge className="bg-gradient-to-r from-purple-500 to-violet-500 text-white shadow-md">
            Featured
          </Badge>
        </div>
      </div>

      {/* Content */}
      <CardHeader className="space-y-2">
        <CardTitle className="text-xl font-semibold tracking-tight text-white">
          {project?.title || "Project Title"}
        </CardTitle>
        <CardDescription className="text-sm text-gray-400">
          {project?.description || "Project description goes here."}
        </CardDescription>
      </CardHeader>

      {/* Footer */}
      <CardFooter>
        <Button
          onClick={handleViewProject}
          className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-md transition-all duration-300 hover:from-violet-700 hover:to-purple-700 hover:shadow-lg hover:shadow-purple-500/30 cursor-pointer"
        >
          View Project →
        </Button>
      </CardFooter>
    </Card>
  )
}
