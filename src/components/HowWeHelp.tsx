import ServiceArt, { type ServiceArtVariant } from './ServiceArt';

const services: { name: string; desc: string; art: ServiceArtVariant }[] = [
  { name: 'Individual Counselling & Therapy', desc: 'A confidential, one-on-one space to work through your thoughts, emotions and challenges — at your own pace.', art: 'individual' },
  { name: 'Couple & Relationship Counselling', desc: 'For couples working on communication, rebuilding trust, or finding their way back to each other.', art: 'couple' },
  { name: 'Family Therapy', desc: 'Helping families understand one another better, work through conflict, and rebuild a healthier way of relating.', art: 'family' },
  { name: 'Child & Adolescent Counselling', desc: 'Age-appropriate support for children and teens facing academic pressure, social struggles or emotional difficulties.', art: 'child' },
  { name: 'Psychological Assessments', desc: 'Structured assessments to better understand cognitive, emotional, behavioural or developmental concerns.', art: 'assessment' },
  { name: 'Cognitive Behaviour Therapy', desc: 'A structured, evidence-based method that helps identify and shift thought patterns that aren\'t serving you.', art: 'cbt' },
  { name: 'Psychodynamic Therapy', desc: 'A deeper, exploratory approach that looks at the past experiences shaping how you feel and act today.', art: 'psychodynamic' },
  { name: 'Workshops & Mental Health Programs', desc: 'Awareness sessions for schools, colleges and workplaces building a healthier culture around mental health.', art: 'workshops' },
];

export default function HowWeHelp() {
  return (
    <section id="how-we-help" className="px-6 sm:px-8 lg:px-12 py-20 lg:py-28">
      <div className="w-full">
        <div className="mb-14 grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-20">
          <div>
            <p className="eyebrow">What we offer</p>
            <h2 className="section-title">
              Support for <span className="italic">every stage of life.</span>
            </h2>
          </div>
          <p className="lead lg:pb-2">
            From one-on-one therapy to family sessions and workshops, every service is delivered by
            trained professionals in a space that feels safe, warm and completely confidential.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
          {services.map((s) => (
            <div key={s.name} className="service-card liquid-card rounded-[1.5rem] p-5 flex flex-col gap-5 h-full">
              <div className="relative h-56 w-full overflow-hidden rounded-[1.1rem] shadow-sm">
                <ServiceArt variant={s.art} label={s.name} />
              </div>
              <h3 className="px-1 text-2xl font-medium leading-snug" style={{ fontFamily: 'var(--font-display)' }}>
                {s.name}
              </h3>
              <p className="body-text px-1 pb-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}