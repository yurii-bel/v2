// import { NavHashLink as Link } from "react-router-hash-link";
import { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50">
      <div className="flex justify-between items-center py-4 mx-4 px-2 lg:mx-0 backdrop-blur-md bg-blend-overlay  bg-slate-900/70">
        <div className="flex justify-center items-center gap-20">
          <span className="font-['Lato'] font-bold px-2 py-1 tracking-widest text-green-300 hover:text-green-100 hover:cursor-pointer">
            YB
          </span>
        </div>
        {/* DESKTOP MENU */}
        <ul className="hidden justify-center flex-wrap items-center text-sm tracking-wide text-slate-300 gap-10 md:flex">
          <li className="link">
            <Link
              activeClass="active"
              smooth
              spy
              to="about"
              className="flex space-x-1"
            >
              <span className="text-green-300">01.</span>
              <span>About</span>
            </Link>
          </li>
          <li className="link">
            <Link
              activeClass="active"
              smooth
              spy
              to="projects"
              className="flex space-x-1"
            >
              <span className="text-green-300">02.</span>
              <span>Projects</span>
            </Link>
          </li>
          <li className="link">
            <Link
              activeClass="active"
              smooth
              spy
              to="contact"
              className="flex space-x-1"
            >
              <span className="text-green-300">03.</span>
              <span>Contact</span>
            </Link>
          </li>
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border text-green-300 border-green-300 rounded-md p-2 hover:cursor-pointer hover:bg-green-300/10 "
            >
              Resume
            </a>
          </li>
        </ul>

        {/* MOBILE MENU */}
        <div className="MOBILE-MENU flex md:hidden">
          <div
            className="HAMBURGER-ICON space-y-2 hover:cursor-pointer"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-green-300"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-green-300"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-green-300"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-slate-200 hover:cursor-pointer"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className="link border-b border-gray-400 my-8 uppercase">
                <Link
                  activeClass="active"
                  smooth
                  spy
                  to="about"
                  className="flex space-x-1"
                >
                  <span className="text-green-300">01.</span>
                  <span>About</span>
                </Link>
              </li>
              <li className="link border-b border-gray-400 my-8 uppercase">
                <Link
                  activeClass="active"
                  smooth
                  spy
                  to="projects"
                  className="flex space-x-1"
                >
                  <span className="text-green-300">02.</span>
                  <span>Projects</span>
                </Link>
              </li>
              <li className="link border-b border-gray-400 my-8 uppercase">
                <Link
                  activeClass="active"
                  smooth
                  spy
                  to="contact"
                  className="flex space-x-1"
                >
                  <span className="text-green-300">03.</span>
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
