function ContactIcon({ platform, icon, username, url }) {

  return (
    <div className="group size-24 flex flex-col items-center font-mono *:transition *:duration-500">
      <a className="peer order-2 group-hover:blur-sm" target="_blank" href={url}>
        <img className="size-12" src={icon} alt={`icon for ${platform}`} />
      </a>
      <span className="order-1 opacity-0 group-hover:opacity-100 peer-focus:opacity-100">{platform}</span>
      <span className="order-3 text-xl opacity-0 group-hover:opacity-100 peer-focus:opacity-100">{username}</span>
    </div>
  )
}

export default ContactIcon
