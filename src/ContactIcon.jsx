function ContactIcon({ platform, icon, username, url }) {

  return (
    <div className="size-24 flex flex-col items-center font-mono">
      <span className="invisible">{platform}</span>
      <a target="_blank" href={url}>
        <img className="size-12" src={icon} />
      </a>
      <span className="invisible text-xl">{username}</span>
    </div>
  )
}

export default ContactIcon
