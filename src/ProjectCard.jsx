function ProjectCard({ title, date, summary, image }) {
  return (
    <div className="bg-gradient-to-b from-purple-400 from-70% to-blue-600 p-px rounded-xl">
      <article className="hover:blur-sm h-full transition ease-in duration-300 bg-neutral-900 rounded-xl overflow-hidden">
        <img className="rounded-b-xl" src={image} alt={`Screenshot of the project ${title}`} />
        <div className="flex justify-between items-center mx-2.5 mt-2 mb-1">
          <h2 className="font-bold text-xl">{title}</h2>
          <h3 className="italic">{date}</h3>
        </div>
        <p className="text-center leading-tight mx-2.5 mb-2.5">{summary}</p>
      </article>
    </div>
  )
}

export default ProjectCard
