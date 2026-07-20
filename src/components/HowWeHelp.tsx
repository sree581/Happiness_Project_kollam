const services = [
  { name: 'Individual Counselling & Therapy', desc: 'A confidential, one-on-one space to work through your thoughts, emotions and challenges — at your own pace.', icon: '🫶' },
  { name: 'Couple & Relationship Counselling', desc: 'For couples working on communication, rebuilding trust, or finding their way back to each other.', icon: '🤝' },
  { name: 'Family Therapy', desc: 'Helping families understand one another better, work through conflict, and rebuild a healthier way of relating.', icon: '🏡' },
  { name: 'Child & Adolescent Counselling', desc: 'Age-appropriate support for children and teens facing academic pressure, social struggles or emotional difficulties.', icon: '🌱' },
  { name: 'Psychological Assessments', desc: 'Structured assessments to better understand cognitive, emotional, behavioural or developmental concerns.', icon: '🧠' },
  { name: 'Cognitive Behaviour Therapy', desc: 'A structured, evidence-based method that helps identify and shift thought patterns that aren\'t serving you.', icon: '✨' },
  { name: 'Psychodynamic Therapy', desc: 'A deeper, exploratory approach that looks at the past experiences shaping how you feel and act today.', icon: '🧭' },
  { name: 'Workshops & Mental Health Programs', desc: 'Awareness sessions for schools, colleges and workplaces building a healthier culture around mental health.', icon: '🎓' },
];

export default function HowWeHelp() {
  return (
    <section id="how-we-help" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm tracking-widest uppercase mb-6" style={{ color: '#6F6F6F' }}>What we offer</p>
        <h2 className="text-4xl sm:text-5xl mb-10 animate-fade-rise" style={{ fontFamily: 'var(--font-display)', color: 'var(--title-brown)' }}>
          Support for <span style={{ color: '#6F6F6F', fontStyle: 'italic' }}>every stage of life.</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {services.map((s) => (
            <div key={s.name} className="service-card liquid-card rounded-[1.25rem] p-4 md:p-5 flex flex-col gap-4 h-full aspect-square min-h-[260px]">
              <div className="flex h-20 w-20 items-center justify-center rounded-[1rem] bg-white/70 text-4xl shadow-sm">
                <span aria-hidden="true">{s.icon}</span>
              </div>
              <h3 className="text-xl font-semibold leading-tight" style={{ fontFamily: 'var(--font-display)', color: 'var(--title-brown)' }}>
                {s.name}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#6F6F6F' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}