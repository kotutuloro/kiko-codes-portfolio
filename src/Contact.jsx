import ContactIcon from "./ContactIcon"

function Contact() {

  const contactInfo = [
    {
      platform: "github",
      icon: <img src="https://placehold.co/50x50" />,
      username: "@kotutuloro",
      url: "https://github.com/kotutuloro"
    },
    {
      platform: "email",
      icon: <img src="https://placehold.co/50x50" />,
      username: "kiko@kiko.codes",
      url: "mailto:kiko@kiko.codes"
    },
    {
      platform: "linkedin",
      icon: <img src="https://placehold.co/50x50" />,
      username: "@kotutuloro",
      url: "https://linkedin.com/in/kotutuloro"
    },
  ]

  const contactIcons = contactInfo.map(info => <ContactIcon {...info} />)

  return (
    <div>
      <h1>contact_me</h1>
      <div>
        {contactIcons}
      </div>
    </div>
  )
}

export default Contact
