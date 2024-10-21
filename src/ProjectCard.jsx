function ProjectCard({ title, date, summary, image }) {
  return (
    <div>
      <img src={image} alt={`Screenshot of the project ${title}`} />
      <div>
        <span>{title}</span>
        <span>{date}</span>
      </div>
      <p>{summary}</p>
    </div>
  )
}

export default ProjectCard
