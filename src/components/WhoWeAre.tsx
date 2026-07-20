export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm tracking-widest uppercase mb-6" style={{ color: '#6F6F6F' }}>
          How this began
        </p>
        <h2
          className="text-4xl sm:text-5xl mb-10 animate-fade-rise"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--title-brown)', letterSpacing: '-1px' }}
        >
          Two friends, one belief: <span style={{ color: 'var(--title-brown)', fontStyle: 'italic' }}>care shouldn't feel clinical.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 text-base leading-relaxed" style={{ color: '#6F6F6F' }}>
        <p>
          Happiness Project was founded by a clinical psychologist who has spent years working
          closely with people through their hardest moments, and a researcher in criminal justice
          with a deep interest in how communities heal. Together they wanted to build something
          different for Kollam , not just a therapy centre, but a space where people could show up
          exactly as they are.
        </p>
        <p>
          What they built wasn't shaped around efficiency, the way most clinics are. It was shaped
          around comfort closer to a home than a hospital because people open up more honestly
          when they feel safe, not just seen. Every plan here is built around the person in front of
          us, never a template.
        </p>
      </div>

        <div className="grid sm:grid-cols-3 gap-8 mt-20">
          {[
            { t: 'Beyond the session', d: 'We promote good mental health through approaches that go past the fifty-minute hour.' },
            { t: 'A door that feels safe', d: 'A genuinely safe environment for every single person who walks through it.' },
            { t: 'Warm, not cold', d: 'Support that is evidence-based, but never delivered like a clinical transaction.' },
          ].map((item) => (
            <div key={item.t} className="liquid-card rounded-[1.25rem] p-6">
              <h3 className="text-lg mb-2" style={{ fontFamily: 'var(--font-display)', color: 'var(--title-brown)' }}>
                {item.t}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#6F6F6F' }}>{item.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}