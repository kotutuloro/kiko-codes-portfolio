function NavLink({ text, link }) {
  return (
    <li className="px-2 last:pr-0"><a href={link}>{text}</a></li>
  )
}

export default NavLink
