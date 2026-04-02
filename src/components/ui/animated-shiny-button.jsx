import { ChevronRight } from "lucide-react"

export function AnimatedShinyButton({
  children,
  className = "",
  url,
  onClick
}) {
  return url ? (
    <a
      href={url}
      className={`inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-lg shadow-lg hover:from-purple-700 hover:to-violet-700 transition-all duration-300 hover:scale-105 hover:shadow-xl ${className}`}
    >
      {children}
      <ChevronRight className="ml-1 size-4 shrink-0 transition-all duration-300 ease-out hover:translate-x-1" />
    </a>
  ) : (
    <button
      onClick={onClick}
      className={`inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-lg shadow-lg hover:from-purple-700 hover:to-violet-700 transition-all duration-300 hover:scale-105 hover:shadow-xl ${className}`}
    >
      {children}
      <ChevronRight className="ml-1 size-4 shrink-0 transition-all duration-300 ease-out hover:translate-x-1" />
    </button>
  );
}
