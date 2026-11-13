"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navLinks } from "@/app/types/types";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");

  useEffect(() => {
    const updateActiveLink = () => setActiveHash(window.location.hash || "#home");
    updateActiveLink();
    window.addEventListener("hashchange", updateActiveLink);
    return () => window.removeEventListener("hashchange", updateActiveLink);
  }, []);

  function closeMenu(href: string) {
    setMenuOpen(false);
    setActiveHash(href);
  }

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <div className="logo-div">
          <Link href="/" className="logo-link" title="BB's portfolio">
            <Image src="/images/bb.png" alt="Logo" width={77} height={77} />
            <h1>PORTFOLIO</h1>
          </Link>
        </div>

        <button
          className={`menu-toggle${menuOpen ? " is-open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <div className={`navbar-links${menuOpen ? " is-open" : ""}`} id="primary-navigation">
          {navLinks.map(({ label, href }) => (
            // Route links track the current page; section links track the current hash on Home.
            <a
              key={href}
              href={href}
              className={`navbar-link${(href.startsWith("/") ? pathname === href : pathname === "/" && activeHash === href) ? " is-active" : ""}`}
              aria-current={
                (href.startsWith("/") ? pathname === href : pathname === "/" && activeHash === href)
                  ? "page"
                  : undefined
              }
              onClick={() => closeMenu(href)}
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
