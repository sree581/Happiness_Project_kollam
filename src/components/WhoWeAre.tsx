const stats = [
  { value: '8+', label: 'Years of clinical experience' },
  { value: '4', label: 'States served' },
  { value: '4', label: 'Languages spoken' },
  { value: '100%', label: 'Confidential sessions' },
];

const values = [
  { icon: '🌿', t: 'Beyond the session', d: 'We promote good mental health through approaches that go past the fifty-minute hour.' },
  { icon: '🏡', t: 'A door that feels safe', d: 'A genuinely safe environment for every single person who walks through it.' },
  { icon: '🤍', t: 'Warm, not cold', d: 'Support that is evidence-based, but never delivered like a clinical transaction.' },
];

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="px-6 sm:px-8 lg:px-12 py-20 lg:py-28">
      <div className="w-full">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-[0_30px_80px_rgba(36,51,47,0.18)]">
              <img
                src="/images/hero/room.jpg"
                alt="A calm, home-like counselling room"
                loading="lazy"
                className="h-[320px] w-full object-cover sm:h-[440px] lg:h-[560px]"
              />
            </div>
            <div className="absolute -bottom-6 left-6 rounded-2xl bg-[#3e6b58] px-6 py-5 text-[#f8f5ec] shadow-xl sm:left-10">
              <p className="text-3xl font-semibold" style={{ fontFamily: 'var(--font-display)' }}>lets sit together and figure it out</p>
             
            </div>
          </div>

          {/* Story */}
          <div>
            <p className="eyebrow">The Story Started</p>
            <h2 className="section-title mb-8">
              Two friends, one belief: <span className="italic">care shouldn't feel clinical.</span>
            </h2>
            <div className="space-y-6">
              <p className="lead">
                Happiness Project was founded by a clinical psychologist who has spent years working
                closely with people through their hardest moments, and a researcher in criminal justice
                with a deep interest in how communities heal. Together they wanted to build something
                different for Kollam, not just a therapy centre, but a space where people could show up
                exactly as they are.
              </p>
              <p className="lead">
                What they built wasn't shaped around efficiency, the way most clinics are. It was shaped
                around comfort closer to a home than a hospital because people open up more honestly
                when they feel safe, not just seen. Every plan here is built around the person in front of
                us, never a template.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {stats.map((s) => (
            <div key={s.label} className="liquid-card rounded-[1.5rem] px-6 py-8 text-center">
              <p className="text-5xl font-semibold text-[#3e6b58] sm:text-6xl" style={{ fontFamily: 'var(--font-display)' }}>
                {s.value}
              </p>
              <p className="mt-3 text-base text-[#48524d]">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:gap-6">
          {values.map((item) => (
            <div key={item.t} className="liquid-card rounded-[1.5rem] p-8">
              <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#3e6b58]/10 text-2xl" aria-hidden="true">
                {item.icon}
              </span>
              <h3 className="mb-3 text-2xl" style={{ fontFamily: 'var(--font-display)' }}>
                {item.t}
              </h3>
              <p className="body-text">{item.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
