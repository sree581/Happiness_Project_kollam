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
    <nav className="relative z-[100] flex flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-8 md:py-6 max-w-7xl mx-auto">

      {/* Logo + Brand */}
      <a
        href="#home"
        style={{
          fontFamily: 'var(--font-display)',
          color: '#000000',
        }}
        className="flex min-w-0 items-center gap-3 text-2xl tracking-tight sm:text-3xl"
      >
        <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-[14px] border border-black/5 bg-white shadow-sm sm:h-14 sm:w-14">
          <img
            src="/logo.jpeg"
            alt="Happiness Project logo"
            className="h-full w-full object-cover"
          />
        </span>

        <span className="truncate">
          Happiness Project
          <sup className="align-super text-[0.55em]">®</sup>
        </span>
      </a>

      {/* Desktop Navigation */}
      <div className="hidden items-center gap-4 md:flex lg:gap-6">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm transition-colors hover:text-black"
            style={{
              color: link.label === 'Home' ? '#000000' : '#6F6F6F',
            }}
          >
            {link.label}
          </a>
        ))}

        <a
          href="#reach-us"
          className="rounded-full bg-black px-6 py-2.5 text-sm text-white transition-transform hover:scale-[1.03]"
        >
          Begin Journey
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="relative z-[110] rounded-full border border-black px-4 py-2 text-sm"
        aria-expanded={open}
        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
      >
        {open ? 'Close' : 'Menu'}
      </button>

      {/* Mobile Navigation */}
      {open && (
        <div className="absolute left-0 right-0 top-full z-[105] mt-2 overflow-hidden rounded-[24px] border border-black/10 bg-white px-8 py-6 shadow-[0_20px_60px_rgba(0,0,0,0.15)] md:hidden">
          
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                style={{
                  color: link.label === 'Home' ? '#000000' : '#6F6F6F',
                }}
                className="text-base transition-colors hover:text-black"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#reach-us"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-black px-6 py-3 text-center text-sm text-white"
            >
              Begin Journey
            </a>
          </div>

        </div>
      )}
    </nav>
  );
}