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

export default ContactIcon
