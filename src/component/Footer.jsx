import Link from "next/link";
import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <Link href="/about">About us</Link>
        <Link href="/contact">Contact us</Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.linkedin.com/in/sarwar-hussain-406891191/">
            <CiLinkedin className="text-4xl" />
          </a>
          <a href="https://www.facebook.com/">
            <FaFacebook className="text-4xl" />
          </a>
          <a href="https://www.instagram.com/">
            <FaSquareInstagram className="text-4xl" />
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by SARWAR
          HUSSAIN
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
