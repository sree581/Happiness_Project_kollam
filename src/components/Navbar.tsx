import { useEffect, useState } from 'react';

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

  /* Prevent the Home page from scrolling while mobile menu is open */
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      {/* =========================================================
          NAVBAR
      ========================================================= */}

      <nav
        className="
          relative
          z-[99999]
          mx-auto
          flex
          max-w-7xl
          flex-wrap
          items-center
          justify-between
          gap-3
          px-4
          py-4
          sm:px-8
          md:py-6
        "
      >
        {/* =====================================================
            LOGO + BRAND
        ===================================================== */}

        <a
          href="#home"
          onClick={closeMenu}
          style={{
            fontFamily: 'var(--font-display)',
            color: '#000000',
          }}
          className="
            flex
            min-w-0
            items-center
            gap-3
            text-2xl
            tracking-tight
            sm:text-3xl
          "
        >
          <span
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              overflow-hidden
              rounded-[14px]
              border
              border-black/5
              bg-white
              shadow-sm
              sm:h-14
              sm:w-14
            "
          >
            <img
              src="/logo.jpeg"
              alt="Happiness Project logo"
              className="h-full w-full object-cover"
            />
          </span>

          <span className="truncate">
            Happiness Project
            <sup className="align-super text-[0.55em]">
              ®
            </sup>
          </span>
        </a>

        {/* =====================================================
            DESKTOP NAVIGATION
        ===================================================== */}

        <div className="hidden items-center gap-4 md:flex lg:gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm transition-colors hover:text-black"
              style={{
                color:
                  link.label === 'Home'
                    ? '#000000'
                    : '#6F6F6F',
              }}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#reach-us"
            className="
              rounded-full
              bg-black
              px-6
              py-2.5
              text-sm
              text-white
              transition-transform
              hover:scale-[1.03]
            "
          >
            Begin Journey
          </a>
        </div>

        {/* =====================================================
            MOBILE MENU BUTTON
        ===================================================== */}

        <button
          type="button"
          onClick={() => setOpen((previous) => !previous)}
          aria-expanded={open}
          aria-label={
            open
              ? 'Close navigation menu'
              : 'Open navigation menu'
          }
          className="
            relative
            z-[100001]
            rounded-full
            border
            border-black
            bg-white
            px-4
            py-2
            text-sm
            text-black
            transition
            hover:bg-black
            hover:text-white
            md:hidden
          "
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </nav>

      {/* =========================================================
          MOBILE FULL SCREEN MENU

          IMPORTANT:
          This is FIXED instead of absolute.

          Therefore it is completely independent of the
          Home page / Hero / Three.js / Experience positioning.
      ========================================================= */}

      {open && (
        <div
          className="
            fixed
            inset-0
            z-[99998]
            bg-[#F8F6F1]
            md:hidden
          "
        >
          {/* Menu content */}

          <div
            className="
              flex
              h-full
              w-full
              flex-col
              overflow-y-auto
              px-6
              pb-8
              pt-[120px]
              sm:px-8
            "
          >
            {/* =================================================
                NAVIGATION LINKS
            ================================================= */}

            <div className="flex flex-col">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="
                    border-b
                    border-black/10
                    py-5
                    text-xl
                    transition-all
                    duration-200
                    hover:pl-2
                  "
                  style={{
                    color:
                      link.label === 'Home'
                        ? '#000000'
                        : '#6F6F6F',
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* =================================================
                CTA
            ================================================= */}

            <div className="mt-auto pt-8">
              <a
                href="#reach-us"
                onClick={closeMenu}
                className="
                  block
                  w-full
                  rounded-full
                  bg-black
                  px-6
                  py-4
                  text-center
                  text-base
                  text-white
                  transition-transform
                  duration-200
                  hover:scale-[1.01]
                "
              >
                Begin Journey
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}