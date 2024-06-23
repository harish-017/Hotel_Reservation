import React, { useEffect, useState } from "react";

import logoLight from "../assets/img/logo-white.svg";
import logoDark from "../assets/img/logo-dark.svg";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header
      className={`${
        scrolled ? "bg-white py-6 shadow-lg" : "bg-transparent py-8"
      }  fixed top-0  transition-all duration-300 z-50   w-full`}
    >
      <div
        className="container mx-auto flex flex-col justify-center items-center gap-y-6  lg:flex-row  lg:justify-between"
        style={{ width: "calc(100vw - 300px)" }}
      >
        <a href="/">
          <img
            src={scrolled ? logoDark : logoLight}
            className="w-[130px]"
            alt=""
          />
        </a>

        <nav
          className={`${
            scrolled ? "text-primary " : "text-white"
          } flex  gap-x-4 lg:gap-x-8 tracking-[2px] font-tertiary uppercase text-[14px] `}
        >
          <a href="/" className="hover:text-accent-hover transition">
            Home
          </a>
          <a href="/" className="hover:text-accent-hover transition ">
            Rooms
          </a>
          <a href="/" className="hover:text-accent-hover transition">
            Restaurant
          </a>
          <a href="/" className="hover:text-accent-hover transition">
            About
          </a>
          <a href="/" className="hover:text-accent-hover transition">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
