import ProjectCard from "./ProjectCard"

function Projects() {
  // placeholder project info until i have some to highlight here
  const projectInfo = Array.from({ length: 4 }, (_, i) => ({
    title: `Even Longer Project Title ${i + 1}`,
    date: "Sept 2024",
    summary: "some quick project description super fast here just a couple lines maybe even like three lines max here",
    image: `https://placehold.co/480x${i + 1}00`
  }))
  const projectElems = projectInfo.map(info => <ProjectCard {...info} />)

  return (
    <div>
      <h1 className="font-mono text-center text-3xl text-purple-400">project&shy;_highlights</h1>
      <div className="my-5 grid sm:grid-cols-2 gap-5">
        {projectElems}
      </div>
      <div className="font-mono text-right text-xl">
        <a href="#" className="underline hover:text-blue-600 transition duration-300">
          more projects...
        </a>
      </div>
    </div>
  )
}

export default Projects
