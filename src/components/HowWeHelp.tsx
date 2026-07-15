const services = [
  { name: 'Individual Counselling & Therapy', desc: 'A confidential, one-on-one space to work through your thoughts, emotions and challenges — at your own pace.' },
  { name: 'Couple & Relationship Counselling', desc: 'For couples working on communication, rebuilding trust, or finding their way back to each other.' },
  { name: 'Family Therapy', desc: 'Helping families understand one another better, work through conflict, and rebuild a healthier way of relating.' },
  { name: 'Child & Adolescent Counselling', desc: 'Age-appropriate support for children and teens facing academic pressure, social struggles or emotional difficulties.' },
  { name: 'Psychological Assessments', desc: 'Structured assessments to better understand cognitive, emotional, behavioural or developmental concerns.' },
  { name: 'Cognitive Behaviour Therapy', desc: 'A structured, evidence-based method that helps identify and shift thought patterns that aren\'t serving you.' },
  { name: 'Psychodynamic Therapy', desc: 'A deeper, exploratory approach that looks at the past experiences shaping how you feel and act today.' },
  { name: 'Workshops & Mental Health Programs', desc: 'Awareness sessions for schools, colleges and workplaces building a healthier culture around mental health.' },
];

export default function HowWeHelp() {
  return (
    <section id="how-we-help" className="px-6 py-32">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm tracking-widest uppercase mb-6" style={{ color: '#6F6F6F' }}>What we offer</p>
        <h2 className="text-4xl sm:text-5xl mb-16 animate-fade-rise" style={{ fontFamily: 'var(--font-display)', color: '#000' }}>
          Support for <span style={{ color: '#6F6F6F', fontStyle: 'italic' }}>every stage of life.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div key={s.name} className="liquid-card rounded-[1.25rem] p-6 md:p-7">
              <h3 className="text-xl mb-2 transition-colors" style={{ fontFamily: 'var(--font-display)', color: '#000' }}>
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