'use client';
import { useState } from 'react';
import Link from 'next/link';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/partners', label: 'Partners' },
  { href: '/about', label: 'About' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 bg-gradient-to-br from-teal to-teal-2 rounded-lg flex items-center justify-center font-black text-white text-lg">M</div>
          <span className="font-bold text-white text-lg">Medi<span className="text-teal">lyon</span></span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href} className="text-white/75 hover:text-white text-sm font-medium transition-colors">{label}</Link>
          ))}
          <Link href="/contact" className="bg-teal hover:bg-teal-2 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors">Request Quote</Link>
        </div>
        <button className="md:hidden text-white text-2xl" onClick={() => setOpen(!open)}>☰</button>
      </div>
      {open && (
        <div className="md:hidden bg-navy border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {[...NAV_LINKS, { href: '/contact', label: 'Request Quote' }].map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setOpen(false)} className="text-white/80 font-medium py-2 border-b border-white/5">{label}</Link>
          ))}
        </div>
      )}
    </nav>
  );
}