import projectInfo from "./projects.json"

function Projects() {
  function ProjectCard({ title, date, summary, image }) {
    return (
      <div className="bg-gradient-to-b from-purple-400 from-70% to-blue-600 p-px rounded-xl">
        <article className="hover:blur-sm h-full transition ease-in duration-300 bg-neutral-900 rounded-xl overflow-hidden">
          <img className="rounded-b-xl" src={image} alt={`Screenshot of the project ${title}`} />
          <div className="flex justify-between items-end gap-2 mx-2.5 mt-2 mb-1">
            <h2 className="font-bold text-xl text-left">{title}</h2>
            <h3 className="italic text-right">{date}</h3>
          </div>
          <p className="text-center leading-tight mx-2.5 mb-2.5">{summary}</p>
        </article>
      </div>
    )
  }

  const projectElems = projectInfo.map(info => <ProjectCard {...info} />)

  return (
    <div>
      <h1 className="font-mono text-center text-3xl text-purple-400">project&shy;_highlights</h1>
      <div className="my-5 grid sm:grid-cols-2 gap-5">
        {projectElems}
      </div>
    </div>
  )
}

export default Projects
