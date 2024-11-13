import { useState } from "react";
import HamburgerIcon from "./icons/bars-solid.svg?react";
import CloseIcon from "./icons/xmark-solid.svg?react";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  function toggleNav() {
    setIsNavOpen((prevNav) => !prevNav);
  }
  function closeNav() {
    setIsNavOpen(false);
  }

  function NavLink({ text, link }) {
    return (
      <li className="md:px-2 md:py-0 md:last:pr-0 p-5 md:text-xl text-2xl text-purple-400 hover:text-neutral-50 transition duration-300">
        <a onClick={closeNav} href={link}>
          {text}
        </a>
      </li>
    );
  }

  return (
    <header className="sticky z-10 top-0 flex justify-between items-end bg-neutral-950 px-8 pt-5 pb-2.5">
      <a href="#">
        <h1 className="drop-shadow-title text-5xl font-extralight italic font-mono tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-400 via-65% to-purple-900">
          Kiko Codes
        </h1>
      </a>
      <nav className="relative">
        <button
          onClick={toggleNav}
          className="size-12 md:hidden flex items-center"
        >
          {isNavOpen ? (
            <CloseIcon className="fill-neutral-50" />
          ) : (
            <HamburgerIcon className="fill-neutral-50" />
          )}
        </button>
        <ul
          className={`md:flex md:divide-x md:divide-y-0 md:static ${isNavOpen ? "" : "hidden"} absolute top-14 right-0 bg-neutral-950 divide-y divide-neutral-50`}
        >
          <NavLink text="about" link="#about" />
          <NavLink text="experience" link="#experience" />
          <NavLink text="projects" link="#projects" />
          <NavLink text="contact" link="#contact" />
        </ul>
      </nav>
    </header>
  );
}

export default Header;
