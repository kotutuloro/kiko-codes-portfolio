function NavLink({ text, link }) {
  return (
    <li className="md:px-2 md:py-0 md:last:pr-0 p-5 md:text-xl text-2xl text-purple-400 hover:text-neutral-50 transition duration-300">
      <a href={link}>{text}</a>
    </li>
  )
}

export default NavLink
