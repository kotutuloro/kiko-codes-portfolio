import myPhoto from "./assets/picrew2.png"

function About() {
  return (
    <div className="max-w-2xl mx-auto flex flex-wrap-reverse gap-6 items-center justify-center text-center">
      <p className="basis-7/12 grow shrink-0">
        Lorem ipsum odor amet, consectetuer adipiscing elit. Egestas feugiat porta nascetur vulputate hendrerit pharetra consectetur molestie. Felis phasellus consequat lorem maecenas at ligula. Praesent aliquam est turpis, velit morbi blandit habitant. Imperdiet mauris amet lobortis ultrices curabitur dui ultrices ad.
      </p>
      <img src={myPhoto} alt="Kiko's headshot" className="rounded-full size-52" />
    </div>
  )
}

export default About
