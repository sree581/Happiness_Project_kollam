export default function OurWay() {
  const pillars = [
    { t: 'Personalised, not templated', d: 'No two people walk in with the same story, so no two treatment plans look the same either.' },
    { t: 'A home-like setting', d: 'The space is built to feel comforting rather than clinical, because comfort makes honesty easier.' },
    { t: 'Genuine expertise', d: 'Every therapist here is professionally trained, and equally invested in the human side of the work.' },
    { t: 'Confidentiality, always', d: "What's shared in a session stays in that session. No exceptions, no grey areas." },
  ];

  return (
    <section id="our-way" className="px-6 py-32 bg-black text-white">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm tracking-widest uppercase mb-6" style={{ color: '#9C9C9C' }}>Our way</p>
        <h2 className="text-4xl sm:text-5xl mb-6" style={{ fontFamily: 'var(--font-display)' }}>
          Listen. Understand. Support. <span style={{ color: '#9C9C9C', fontStyle: 'italic' }}>Grow.</span>
        </h2>
        <p className="max-w-xl text-base leading-relaxed mb-16" style={{ color: '#9C9C9C' }}>
          Healing begins with feeling heard. Every session is guided by one principle: understand a
          person fully before offering direction, so the support we give actually fits the person
          receiving it.
        </p>

        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
          {pillars.map((p) => (
            <div key={p.t}>
              <h3 className="text-lg mb-2" style={{ fontFamily: 'var(--font-display)' }}>{p.t}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#9C9C9C' }}>{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}