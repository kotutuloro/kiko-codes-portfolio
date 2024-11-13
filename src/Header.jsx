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
      <li className="p-5 text-2xl text-purple-400 transition duration-300 hover:text-neutral-50 md:px-2 md:py-0 md:text-xl md:last:pr-0">
        <a onClick={closeNav} href={link}>
          {text}
        </a>
      </li>
    );
  }

  return (
    <header className="sticky top-0 z-10 flex items-end justify-between bg-neutral-950 px-8 pb-2.5 pt-5">
      <a href="#">
        <h1 className="bg-gradient-to-r from-blue-600 via-purple-400 via-65% to-purple-900 bg-clip-text font-mono text-5xl font-extralight italic tracking-wider text-transparent drop-shadow-title">
          Kiko Codes
        </h1>
      </a>
      <nav className="relative">
        <button
          onClick={toggleNav}
          className="flex size-12 items-center md:hidden"
        >
          {isNavOpen ? (
            <CloseIcon className="fill-neutral-50" />
          ) : (
            <HamburgerIcon className="fill-neutral-50" />
          )}
        </button>
        <ul
          className={`md:static md:flex md:divide-x md:divide-y-0 ${isNavOpen ? "" : "hidden"} absolute right-0 top-14 divide-y divide-neutral-50 bg-neutral-950`}
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
