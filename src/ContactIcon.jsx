function ContactIcon({ platform, icon, username, url }) {

  return (
    <div>
      <span>{platform}</span>
      <a target="_blank" href={url}>{icon}</a>
      <span>{username}</span>
    </div>
  )
}

export default ContactIcon
