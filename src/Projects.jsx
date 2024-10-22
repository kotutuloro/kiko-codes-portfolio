import ProjectCard from "./ProjectCard"

function Projects() {
  // placeholder project info until i have some to highlight here
  const projectInfo = Array.from({ length: 4 }, (_, i) => ({
    title: `Project Title ${i + 1}`,
    date: "Sept 2024",
    summary: "some quick project description super fast here just a couple lines maybe even like three lines max here",
    image: "https://placehold.co/480x300"
  }))
  const projectElems = projectInfo.map(info => <ProjectCard {...info} />)

  return (
    <div>
      <h1 className="font-mono text-center text-3xl text-purple-400">project_highlights</h1>
      <div className="my-5 grid grid-cols-2 gap-5">
        {projectElems}
      </div>
      <div className="font-mono text-right text-xl">
        <a href="#" className="underline">more projects...</a>
      </div>
    </div>
  )
}

export default Projects
