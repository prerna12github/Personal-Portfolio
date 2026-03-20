export function ProjectCard({ title, description, image, tags, link }) {
  return (
    <div className="border rounded-xl shadow">
      <img src={image} alt={title} className="h-40 w-full object-cover" />
      <div className="p-4">
        <h3 className="font-bold">{title}</h3>
        <p>{description}</p>

        <div className="flex gap-2 mt-2">
          
          {tags?.map((tag, i) => (
            <span key={i}>{tag}</span>
          ))}
        </div>

        <a href={link} target="_blank">View Project</a>
      </div>
    </div>
  )
}
