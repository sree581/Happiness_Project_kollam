export default function Footer() {
  const instagramUrl = "PASTE_YOUR_INSTAGRAM_URL_HERE";
  const facebookUrl = "PASTE_YOUR_FACEBOOK_URL_HERE";
  const whatsappUrl = "https://wa.me/917907493123";

  return (
    <footer className="px-6 py-16">
      <div className="max-w-6xl mx-auto">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.1fr_0.8fr_1.4fr]">

          {/* Contact */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--title-brown)",
              }}
              className="text-2xl mb-4"
            >
              Happiness Project
            </p>

            <p
              className="text-sm leading-7"
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
              className="mt-3 inline-block text-sm transition hover:text-black"
              style={{ color: "#6F6F6F" }}
            >
              +91 79074 93123
            </a>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-3 text-sm">
            <a
              href="#who-we-are"
              className="transition hover:text-black"
              style={{ color: "#6F6F6F" }}
            >
              Who We Are
            </a>

            <a
              href="#how-we-help"
              className="transition hover:text-black"
              style={{ color: "#6F6F6F" }}
            >
              How We Help
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
              className="mb-4 text-xs uppercase tracking-[0.25em]"
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
                className="rounded-full border border-[#DED6CC] bg-white/60 px-5 py-3 text-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md"
                style={{ color: "#24332F" }}
              >
                Instagram
              </a>

              {/* Facebook */}
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#DED6CC] bg-white/60 px-5 py-3 text-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md"
                style={{ color: "#24332F" }}
              >
                Facebook
              </a>

              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#DED6CC] bg-white/60 px-5 py-3 text-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md"
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
                className="mb-4 text-xs uppercase tracking-[0.3em]"
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
                className="max-w-sm text-sm leading-7"
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
                className="mt-7 inline-flex w-fit items-center rounded-full border border-[#24332F] px-5 py-3 text-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#24332F] hover:text-white"
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
        className="max-w-6xl mx-auto text-xs mt-10 leading-relaxed"
        style={{ color: "#6F6F6F" }}
      >
        The information on this website is for general awareness only and is
        not a substitute for professional medical or psychological advice. If
        you are facing a mental health emergency, please contact a local
        helpline or visit the nearest hospital.
      </p>

      {/* Credits */}
      <div
        className="max-w-6xl mx-auto mt-6 text-xs text-center"
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
    </footer>
  );
}