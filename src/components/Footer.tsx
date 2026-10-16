export default function Footer() {
  const instagramUrl = "https://www.instagram.com/happinessproject_cpc?igsh=NWlyandjMWFnaG5r";
  const facebookUrl = "https://www.facebook.com/share/1PQBPcL1VR/?mibextid=wwXIfr";
  const whatsappUrl = "https://wa.me/917907493123";

  return (
    <footer className="px-6 sm:px-8 lg:px-12 py-16">
      <div className="w-full">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.1fr_0.8fr_1.4fr]">

          {/* Contact */}
          <div>
            <img
              src="/logo-mark.jpg"
              alt="Happiness Project"
              className="mb-5 h-28 w-auto rounded-[14px] shadow-sm"
            />

            <p
              className="text-base leading-7"
              style={{ color: "#6F6F6F" }}
            >
              Near Natchiar Mutt Temple,
              <br />
              Jawahar Nagar, Kollam,
              <br />
              Kerala
            </p>

            <a
              href="tel:+917907493123"
              className="mt-3 inline-block text-lg font-medium transition hover:text-black"
              style={{ color: "#6F6F6F" }}
            >
              +91 79074 93123
            </a>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4 text-base">
            <a
              href="#how-we-help"
              className="transition hover:text-black"
              style={{ color: "#6F6F6F" }}
            >
              What We Offer
            </a>

            <a
              href="#who-we-are"
              className="transition hover:text-black"
              style={{ color: "#6F6F6F" }}
            >
              How This Began
            </a>

            <a
              href="#our-way"
              className="transition hover:text-black"
              style={{ color: "#6F6F6F" }}
            >
              Our Way
            </a>

            <a
              href="#reach-us"
              className="transition hover:text-black"
              style={{ color: "#6F6F6F" }}
            >
              Reach Us
            </a>
          </div>

          {/* Social Media */}
          <div>
            <p
              className="mb-4 text-sm font-semibold uppercase tracking-[0.2em]"
              style={{ color: "#8A847A" }}
            >
              Connect with us
            </p>

            <div className="flex flex-wrap gap-3">

              {/* Instagram */}
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#DED6CC] bg-white/60 px-6 py-3 text-base transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md"
                style={{ color: "#24332F" }}
              >
                Instagram
              </a>

              {/* Facebook */}
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#DED6CC] bg-white/60 px-6 py-3 text-base transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md"
                style={{ color: "#24332F" }}
              >
                Facebook
              </a>

              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#DED6CC] bg-white/60 px-6 py-3 text-base transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md"
                style={{ color: "#24332F" }}
              >
                WhatsApp
              </a>

            </div>
          </div>
        </div>

        {/* Location Map */}
        <div className="mt-14 overflow-hidden rounded-[30px] border border-[#DED6CC] bg-white/60 shadow-[0_20px_60px_rgba(36,51,47,0.08)]">

          <div className="grid grid-cols-1 lg:grid-cols-[0.7fr_1.3fr]">

            {/* Location Information */}
            <div className="flex flex-col justify-center p-8 sm:p-10">

              <p
                className="mb-4 text-sm font-semibold uppercase tracking-[0.2em]"
                style={{ color: "#8A847A" }}
              >
                Find us
              </p>

              <h3
                className="mb-5 text-3xl sm:text-4xl"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--title-brown)",
                }}
              >
                Come visit us.
              </h3>

              <p
                className="max-w-sm text-base leading-7"
                style={{ color: "#6F6F6F" }}
              >
                Near Natchiar Mutt Temple,
                <br />
                Jawahar Nagar,
                <br />
                Kollam, Kerala
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Near+Natchiar+Mutt+Temple,+Jawahar+Nagar,+Kollam,+Kerala"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex w-fit items-center rounded-full border border-[#24332F] px-6 py-3 text-base transition-all duration-300 hover:-translate-y-1 hover:bg-[#24332F] hover:text-white"
                style={{ color: "#24332F" }}
              >
                Open in Google Maps →
              </a>

            </div>

            {/* Map */}
            <div className="h-[350px] min-h-[300px] lg:h-[400px]">
              <iframe
                title="Happiness Project Location"
                src="https://www.google.com/maps?q=Near%20Natchiar%20Mutt%20Temple,%20Jawahar%20Nagar,%20Kollam,%20Kerala&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>
        </div>

      </div>

      {/* Disclaimer */}
      <p
        className="w-full text-sm mt-10 leading-relaxed"
        style={{ color: "#6F6F6F" }}
      >
        The information on this website is for general awareness only and is
        not a substitute for professional medical or psychological advice. If
        you are facing a mental health emergency, please contact a local
        helpline or visit the nearest hospital.
      </p>

      {/* Credits */}
      <div
        className="w-full mt-6 text-sm text-center"
        style={{ color: "#6F6F6F" }}
      >
        <a
          href="https://www.aspireandtact.com/"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-2 hover:text-black"
        >
          Powered by Aspire and Tact
        </a>
      </div>

      {/* Back to top */}
      <div className="mt-10 flex justify-center">
        <a
          href="#home"
          aria-label="Back to top"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3e6b58] text-[#f8f5ec] shadow-[0_8px_25px_rgba(36,51,47,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#2f5546]"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
            <path d="M12 19V5" />
            <path d="M5 12l7-7 7 7" />
          </svg>
        </a>
      </div>
    </footer>
  );
}