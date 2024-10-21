import ProjectCard from "./ProjectCard"

function Projects() {
  // placeholder project info until i have some to highlight here
  const projectInfo = Array.from({ length: 4 }, (_, i) => ({
    title: `Project Title ${i + 1}`,
    date: "Sept 2024",
    summary: "some quick project description super fast here just a couple lines maybe even like three lines max here",
    image: "https://placehold.co/500x400"
  }))
  const projectElems = projectInfo.map(info => <ProjectCard {...info} />)

  return (
    <div>
      <h1>project_highlights</h1>
      <div>
        {projectElems}
      </div>
      <span><a href="#">more projects...</a></span>
    </div>
  )
}

export default Projects
