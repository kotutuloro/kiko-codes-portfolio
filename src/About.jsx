import myPhoto from "./assets/picrew2.png";

function About() {
  return (
    <div className="mx-auto flex max-w-2xl flex-wrap-reverse items-center justify-center gap-6 text-center">
      <div className="shrink-0 grow basis-7/12">
        <p>
          Hiya! I'm Kiko, a software developer with 7+ years in the industry.
          Most of my experience is in back-end web development and distributed
          systems, but I like to occasionally dabble in front-end too, as a
          treat.
        </p>
        <p>
          Check out some of the{" "}
          <a
            href="#projects"
            className="underline decoration-purple-400 transition duration-300 hover:text-purple-400 hover:decoration-neutral-50"
          >
            projects
          </a>{" "}
          I've worked on, and{" "}
          <a
            href="#contact"
            className="underline decoration-purple-400 transition duration-300 hover:text-purple-400 hover:decoration-neutral-50"
          >
            contact me
          </a>{" "}
          if you want me to work on a project of yours!
        </p>
      </div>
      <img
        src={myPhoto}
        alt="Kiko's headshot"
        className="size-52 rounded-full"
      />
    </div>
  );
}

export default About;
