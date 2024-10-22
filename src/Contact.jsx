import ContactIcon from "./ContactIcon"

function Contact() {

  const contactInfo = [
    {
      platform: "github",
      icon: "https://placehold.co/100x100",
      username: "@kotutuloro",
      url: "https://github.com/kotutuloro"
    },
    {
      platform: "email",
      icon: "https://placehold.co/100x100",
      username: "kiko@kiko.codes",
      url: "mailto:kiko@kiko.codes"
    },
    {
      platform: "linkedin",
      icon: "https://placehold.co/100x100",
      username: "@kotutuloro",
      url: "https://linkedin.com/in/kotutuloro"
    },
  ]

  const contactIcons = contactInfo.map(info => <ContactIcon {...info} />)

  return (
    <div>
      <h1 className="font-mono text-center text-3xl text-purple-400">contact_me</h1>
      <div className="mt-5 flex flex-wrap justify-center">
        {contactIcons}
      </div>
    </div>
  )
}

export default Contact
