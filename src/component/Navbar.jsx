"use client";
import { Link, Button } from "@heroui/react";
import { Bars, PersonFill, XmarkShape } from "@gravity-ui/icons";
import { useState } from "react";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  // const [isVisible, setIsVisible] = useState(false);
  return (
    <div className=" bg-gray-100 backdrop-blur-md z-20 fixed top-0 right-0 w-full">
      <nav className="sticky top-0 z-40 w-full  ">
        <header className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-3">
            {/* <Logo /> */}
            <p variant="secondary" className="rounded-2xl">
              QurbaniHat
            </p>
          </div>
          <ul className="hidden md:flex items-center gap-4">
            <li>
              <Link
                href="/"
                className={`${pathname === "/" ? "border-b-purple-500 text-purple-500" : ""} hover:text-orange-400 transition-colors`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/animals"
                className={`${pathname === "/animals" ? "border-b-purple-500 text-purple-500" : ""} hover:text-orange-400 transition-colors`}
              >
                All Animals
              </Link>
            </li>
          </ul>

          <div className="hidden md:block">
            <Button variant="ghost">
              <Link
                className="no-underline gap-1 flex items-center"
                href="/login"
              >
                <PersonFill /> Login
              </Link>
            </Button>
            <Button variant="ghost">
              <Link
                className="no-underline gap-1 flex items-center"
                href="/signup"
              >
                <PersonFill /> Sign Up
              </Link>
            </Button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <XmarkShape size={28} /> : <Bars size={28} />}
            </button>
          </div>
        </header>
        {/* Mobile Nav  */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <ul className="flex flex-col gap-3 p-4">
              <li>
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className={`block p-2 ${
                    pathname === "/" ? "text-orange-500 font-semibold" : ""
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/animals"
                  onClick={() => setIsOpen(false)}
                  className={`block p-2 ${
                    pathname === "/animals"
                      ? "text-orange-500 font-semibold"
                      : ""
                  }`}
                >
                  All Animals
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  onClick={() => setIsOpen(false)}
                  className={`block p-2 ${
                    pathname === "/about"
                      ? "text-orange-500 font-semibold "
                      : ""
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className=" p-2 flex items-center gap-1"
                >
                  <PersonFill /> Login
                </Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  onClick={() => setIsOpen(true)}
                  className=" p-2 flex items-center gap-1"
                >
                  <PersonFill /> Sign Up
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
