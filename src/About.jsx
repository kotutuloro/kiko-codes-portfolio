import myPhoto from "./assets/picrew2.png"

function About() {
  return (
    <div className="max-w-2xl mx-auto flex flex-wrap-reverse gap-6 items-center justify-center text-center">
      <div className="basis-7/12 grow shrink-0">
        <p>
          Hiya! I'm Kiko, a software developer with 7+ years in the industry.
          Most of my experience is in back-end web development and distributed systems,
          but I like to occasionally dabble in front-end too, as a treat.
        </p>
        <p>
          Check out some of the <a href="#projects" className="underline decoration-purple-400 hover:decoration-neutral-50 hover:text-purple-400 transition duration-300">
            projects</a> I've worked on, and <a href="#contact" className="underline decoration-purple-400 hover:decoration-neutral-50 hover:text-purple-400 transition duration-300">
            contact me</a> if you want me to work on a project of yours!
        </p>
      </div>
      <img src={myPhoto} alt="Kiko's headshot" className="rounded-full size-52" />
    </div>
  )
}

export default About
