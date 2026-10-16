export default function OurWay() {
  const pillars = [
    { t: 'Personalised, not templated', d: 'No two people walk in with the same story, so no two treatment plans look the same either.' },
    { t: 'A home-like setting', d: 'The space is built to feel comforting rather than clinical, because comfort makes honesty easier.' },
    { t: 'Genuine expertise', d: 'Every therapist here is professionally trained, and equally invested in the human side of the work.' },
    { t: 'Confidentiality, always', d: "What's shared in a session stays in that session. No exceptions, no grey areas." },
  ];

  return (
    <section id="our-way" className="px-6 sm:px-8 lg:px-12 py-20 lg:py-28">
      <div className="w-full grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20 items-start">
        <div className="lg:sticky lg:top-8">
          <p className="eyebrow">Our way</p>
          <h2 className="section-title mb-8">
            Listen. Understand. Support. <span className="italic">Grow.</span>
          </h2>
          <p className="lead max-w-xl">
            Healing begins with feeling heard. Every session is guided by one principle: understand a
            person fully before offering direction, so the support we give actually fits the person
            receiving it.
          </p>
          <a
            href="tel:+917907493123"
            className="mt-10 inline-flex rounded-full bg-[#3e6b58] px-8 py-4 text-base text-[#f8f5ec] transition-transform hover:scale-[1.03]"
          >
            Book an Appointment
          </a>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
          {pillars.map((p, i) => (
            <div key={p.t} className="liquid-card rounded-[1.5rem] p-8">
              <span
                className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#3e6b58] text-lg font-semibold text-[#f8f5ec]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                0{i + 1}
              </span>
              <h3 className="mb-3 text-2xl" style={{ fontFamily: 'var(--font-display)' }}>{p.t}</h3>
              <p className="body-text">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
