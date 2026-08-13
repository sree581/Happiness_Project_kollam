import { useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "How This Began", href: "#who-we-are" },
  { label: "What We Offer", href: "#how-we-help" },
  { label: "Our Team", href: "#our-team" },
  { label: "Our Way", href: "#our-way" },
  { label: "Contact", href: "#reach-us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav className="relative z-[9999] w-full px-4 sm:px-8 py-4 md:py-6">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
        
        {/* LOGO / BRAND */}
        <a
          href="#home"
          onClick={closeMenu}
          style={{
            fontFamily: "var(--font-display)",
            color: "#000000",
          }}
          className="flex items-center gap-3 text-2xl sm:text-3xl tracking-tight min-w-0"
        >
          <span className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-[14px] bg-white shadow-sm overflow-hidden border border-black/5 shrink-0">
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

        {/* DESKTOP NAVIGATION */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm transition-colors hover:text-black"
              style={{
                color:
                  link.label === "Home"
                    ? "#000000"
                    : "#6F6F6F",
              }}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#reach-us"
            className="rounded-full px-6 py-2.5 text-sm bg-black text-white transition-transform hover:scale-[1.03]"
          >
            Begin Journey
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          className="
            md:hidden
            relative
            z-[10001]
            text-sm
            border
            border-black
            rounded-full
            px-5
            py-2.5
            bg-white
            text-black
            transition-all
          "
        >
          {open ? "Close" : "Menu"}
        </button>

        {/* MOBILE MENU */}
        {open && (
          <div
            className="
              absolute
              top-full
              left-0
              right-0
              z-[10000]
              md:hidden
              bg-black
              text-white
              border-t
              border-white/10
              shadow-[0_20px_50px_rgba(0,0,0,0.35)]
              overflow-hidden
            "
          >
            <div className="px-6 py-7 flex flex-col">
              
              {links.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="
                    flex
                    items-center
                    justify-between
                    py-5
                    text-lg
                    text-white
                    border-b
                    border-white/15
                    transition-colors
                    hover:text-white/70
                  "
                >
                  <span>{link.label}</span>

                  <span className="text-white/50 text-sm">
                    0{index + 1}
                  </span>
                </a>
              ))}

              {/* MOBILE CTA */}
              <a
                href="#reach-us"
                onClick={closeMenu}
                className="
                  mt-7
                  w-full
                  rounded-full
                  bg-white
                  text-black
                  text-center
                  py-4
                  text-base
                  font-medium
                  transition-transform
                  hover:scale-[1.02]
                "
              >
                Begin Journey
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}