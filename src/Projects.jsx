import projectInfo from "./projects.json";

function Projects({ openModal, setModalContent }) {
  function ProjectCard({ title, date, summary, image }) {
    function showProjectModal() {
      const content = (
        <div className="flex flex-col items-center">
          <img
            className="max-w-screen max-h-[90vh] rounded-xl sm:max-w-[80vw]"
            src={image}
            alt={`Screenshot of the project ${title}`}
          />
          <h3 className="text-xl text-purple-400" id="modal-title">
            {title}
          </h3>
        </div>
      );
      setModalContent(content);
      openModal();
    }

    return (
      <div className="rounded-xl bg-gradient-to-b from-purple-400 from-70% to-blue-600 p-px">
        <article
          onClick={showProjectModal}
          className="h-full cursor-pointer overflow-hidden rounded-xl bg-neutral-900 transition duration-300 ease-in hover:blur-sm"
        >
          <img
            className="rounded-b-xl"
            src={image}
            alt={`Screenshot of the project ${title}`}
          />
          <div className="mx-2.5 mb-1 mt-2 flex items-end justify-between gap-2">
            <h2 className="text-left text-xl font-bold underline decoration-purple-400 decoration-dotted">
              {title}
            </h2>
            <h3 className="text-right italic">{date}</h3>
          </div>
          <p className="mx-2.5 mb-2.5 text-center leading-tight">{summary}</p>
        </article>
      </div>
    );
  }

  const projectElems = projectInfo.map((info) => (
    <ProjectCard key={info.title} {...info} />
  ));
  return (
    <div>
      <h1 className="text-center font-mono text-3xl text-purple-400">
        project&shy;_highlights
      </h1>
      <div className="my-5 grid gap-5 sm:grid-cols-2">{projectElems}</div>
    </div>
  );
}

export default Projects;
