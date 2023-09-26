import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "About", label: "About" },
    { to: "Stack", label: "Stack" },
    { to: "Project", label: "Project" },
    { to: "Contact", label: "Contact" },
  ];

  return (
    <div className="flex justify-end items-center p-3">
      <ul className="flex">
        {navLinks.map((link, index) => (
          <li
            key={index}
            className="mr-8 p-3 hover:scale-105 transition-all duration-300 ease-in-out  hover:cursor-pointer "
          >
            <Link
              spy={true}
              to={link.to}
              smooth={true}
              activeClass="activeClass"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
