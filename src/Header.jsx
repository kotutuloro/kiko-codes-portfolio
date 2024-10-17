import NavLink from "./NavLink"

function Header() {
  return (
    <header>
      <h1>Kiko Codes</h1>
      <nav>
        <ul>
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
