"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const items = [
  { name: "About", href: "/" },
  { name: "Research", href: "/projects" },
  { name: "Publications", href: "/publications" },
  { name: "Personal", href: "/info" },
];
export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <nav className="site-container nav-layout" aria-label="Main navigation">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <Image src="/logo.jpg" alt="" width={34} height={34} className="rounded" />
          <span>Arkadiusz Sitek</span>
        </Link>
        <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button>
        <div id="main-navigation" className={`nav-links ${open ? "is-open" : ""}`}>
          {items.map(item => <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined} onClick={() => setOpen(false)}>{item.name}</Link>)}
        </div>
      </nav>
    </header>
  );
}
