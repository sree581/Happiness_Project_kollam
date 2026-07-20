import { useState } from 'react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'How This Began', href: '#who-we-are' },
  { label: 'What We Offer', href: '#how-we-help' },
  { label: 'Our Team', href: '#our-team' },
  { label: 'Our Way', href: '#our-way' },
  { label: 'Contact', href: '#reach-us' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex flex-wrap justify-between items-center px-4 sm:px-8 py-4 md:py-6 max-w-7xl mx-auto relative z-20 gap-3">
      <a href="#home" style={{ fontFamily: 'var(--font-display)', color: '#000000' }} className="flex items-center gap-3 text-2xl sm:text-3xl tracking-tight min-w-0">
        <span className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-[14px] bg-white shadow-sm overflow-hidden border border-black/5 shrink-0">
          <img src="/logo.jpeg" alt="Happiness Project logo" className="h-full w-full object-cover" />
        </span>
        <span className="truncate">Happiness Project<sup className="align-super text-[0.55em]">®</sup></span>
      </a>

      <div className="hidden md:flex items-center gap-4 lg:gap-6">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm transition-colors hover:text-black"
            style={{ color: link.label === 'Home' ? '#000000' : '#6F6F6F' }}
          >
            {link.label}
          </a>
        ))}
        <a href="#reach-us" className="rounded-full px-6 py-2.5 text-sm bg-black text-white transition-transform hover:scale-[1.03]">
          Begin Journey
        </a>
      </div>

      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-sm border border-black rounded-full px-4 py-2"
      >
        {open ? 'Close' : 'Menu'}
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 bg-white flex flex-col gap-4 px-8 py-6 md:hidden border-t hairline">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{ color: link.label === 'Home' ? '#000000' : '#6F6F6F' }}
              className="text-sm"
            >
              {link.label}
            </a>
          ))}
          <a href="#reach-us" onClick={() => setOpen(false)} className="rounded-full px-6 py-2.5 text-sm bg-black text-white text-center">
            Begin Journey
          </a>
        </div>
      )}
    </nav>
  );
}
