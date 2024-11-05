import GithubIcon from "./icons/square-github-brands-solid.svg?react"
import EmailIcon from "./icons/envelope-open-text-solid.svg?react"
import LinkedinIcon from "./icons/linkedin-brands-solid.svg?react"

function Contact() {

  const contactInfo = [
    {
      platform: "github",
      Icon: GithubIcon,
      username: "@kotutuloro",
      url: "https://github.com/kotutuloro"
    },
    {
      platform: "email",
      Icon: EmailIcon,
      username: "kiko@kiko.codes",
      url: "mailto:kiko@kiko.codes"
    },
    {
      platform: "linkedin",
      Icon: LinkedinIcon,
      username: "@kotutuloro",
      url: "https://linkedin.com/in/kotutuloro"
    },
  ]

  function ContactIcon({ platform, Icon, username, url }) {
    return (
      <div className="group size-24 flex flex-col items-center font-mono *:transition *:duration-500">
        <a className="peer order-2 group-hover:blur-sm size-12 flex items-center" target="_blank" href={url}>
          <Icon className="fill-blue-600" />
        </a>
        <span className="order-1 opacity-0 group-hover:opacity-100 peer-focus:opacity-100">{platform}</span>
        <span className="order-3 text-xl opacity-0 group-hover:opacity-100 peer-focus:opacity-100">{username}</span>
      </div>
    )
  }

  const contactIcons = contactInfo.map(info => <ContactIcon {...info} />)
  return (
    <div>
      <h1 className="font-mono text-center text-3xl text-purple-400">contact&shy;_me</h1>
      <div className="mt-5 flex flex-wrap justify-center">
        {contactIcons}
      </div>
    </div>
  )
}

export default Contact
