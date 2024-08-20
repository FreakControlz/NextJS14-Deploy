"use client";

import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "../constants";
import Button from "./Button";
import { Menu } from '@geist-ui/icons';
import { X } from '@geist-ui/icons'

import { use, useEffect, useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [header, setHeader] = useState(false);

  // Scroll event listener
  const handleScroll = () => {
    if (window.scrollY >= 80) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handeling small size menu nav bar
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  // Start of the component
  return (
    // First Nav bar with logo and links
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/Logo.svg" alt="logo" width={150} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flex-center cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      {/* Start of the second sticky navbar */}
      <div className={`fixed top-0  left-0 w-full  text-white p-4 transition-transform duration-300 z-30 ${header ? 'translate-y-0' : '-translate-y-full'}`}>
          <ul className="hidden h-full lg:flex justify-center items-center">
            <div
              className="bg-gray-50 flex gap-24  bg-opacity-50
            backdrop-blur-lg py-4 px-6 rounded-full"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  href={link.href}
                  key={link.key}
                  className="regular-16 text-gray-900 opacity-100 cursor-pointer  transition-all hover:font-bold"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </ul>
        </div>
        {/* </div> */}
  
      {/* Start of the menu navbar */}
      <div
        onClick={handleNav}
        className={
          header
            ? "inline-block cursor-pointer lg:hidden sm:fixed sm:right-10 sm:bg-gray-30 sm:p-5 sm:rounded-full sm:backdrop-blur-xl sm:bg-opacity-40"
            : "inline-block cursor-pointer lg:hidden"
        }
      >
        <Menu size={32} />
      </div>
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[65%] lg:hidden h-screen bg-neutral-300 p-10 ease-in duration-500 "
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }
      >
        <div className="flex lg:hidden w-full items-center justify-end">
          <div className="cursor-pointer" onClick={handleNav}>
            <X size={32} />
          </div>
        </div>

        <ul className="flex-col py-4 h-full gap-12 flex">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className=" flex regular-24 text-gray-50 flex-center cursor-pointer pb-1.5 transition-all hover:font-bold"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
