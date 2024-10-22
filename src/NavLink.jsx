function NavLink({ text, link }) {
  return (
    <li className="px-2 last:pr-0 hover:text-neutral-50 transition duration-300"><a href={link}>{text}</a></li>
  )
}

export default NavLink
