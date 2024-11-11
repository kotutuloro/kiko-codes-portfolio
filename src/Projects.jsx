import projectInfo from "./projects.json"

function Projects({ openModal, setModalContent }) {
  function ProjectCard({ title, date, summary, image }) {
    function showProjectModal() {
      const content = (
        <div className="flex flex-col items-center">
          <img className="rounded-xl max-h-[90vh] max-w-screen sm:max-w-[80vw]" src={image} alt={`Screenshot of the project ${title}`} />
          <h3 className="text-xl text-purple-400" id="modal-title">{title}</h3>
        </div>
      )
      setModalContent(content)
      openModal()
    }

    return (
      <div className="bg-gradient-to-b from-purple-400 from-70% to-blue-600 p-px rounded-xl">
        <article onClick={showProjectModal} className="hover:blur-sm cursor-pointer h-full transition ease-in duration-300 bg-neutral-900 rounded-xl overflow-hidden">
          <img className="rounded-b-xl" src={image} alt={`Screenshot of the project ${title}`} />
          <div className="flex justify-between items-end gap-2 mx-2.5 mt-2 mb-1">
            <h2 className="font-bold text-xl text-left underline decoration-dotted">{title}</h2>
            <h3 className="italic text-right">{date}</h3>
          </div>
          <p className="text-center leading-tight mx-2.5 mb-2.5">{summary}</p>
        </article>
      </div>
    )
  }

  const projectElems = projectInfo.map(info => <ProjectCard key={info.title} {...info} />)
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
