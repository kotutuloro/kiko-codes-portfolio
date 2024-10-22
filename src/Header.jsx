import NavLink from "./NavLink"

function Header() {
  return (
    <header className="flex justify-between items-end bg-neutral-950 px-8 pt-5 pb-2.5">
      <a href="/">
        <h1 className="drop-shadow-title text-5xl font-extralight italic font-mono tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-400 via-65% to-purple-900">
          Kiko Codes
        </h1>
      </a>
      <nav className="text-purple-400 text-xl">
        <ul className="flex divide-x divide-neutral-50">
          <NavLink text="about" link="#about" />
          <NavLink text="projects" link="#projects" />
          <NavLink text="resume" link="#" />
          <NavLink text="contact" link="#contact" />
        </ul>
      </nav>
    </header>
  )
}

export default Header
