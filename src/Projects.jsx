import ProjectCard from "./ProjectCard"
import projectInfo from "./projects.json"

function Projects() {
  const projectElems = projectInfo.map(info => <ProjectCard {...info} />)

  return (
    <div>
      <h1 className="font-mono text-center text-3xl text-purple-400">project&shy;_highlights</h1>
      <div className="my-5 grid sm:grid-cols-2 gap-5">
        {projectElems}
      </div>
      {/* <div className="font-mono text-right text-xl">
        <a href="#" className="underline decoration-purple-400 hover:decoration-neutral-50 hover:text-purple-400 transition duration-300">
          more projects...
        </a>
      </div> */}
    </div>
  )
}

export default Projects
