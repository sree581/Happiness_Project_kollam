const initialTherapists = [
  {
    name: 'Dr. Ayesha Mehra',
    qualification: 'PhD in Clinical Psychology',
    experience: '9 years experience',
    specialization: 'Anxiety, trauma recovery, relationship counselling',
    bio: 'Ayesha blends warmth with clarity, helping clients make sense of difficult emotions and gently rebuild a steadier sense of self.',
  },
  {
    name: 'Sohail Khan',
    qualification: 'M.Phil. in Clinical Psychology',
    experience: '12 years experience',
    specialization: 'Family systems, stress management, adolescent wellbeing',
    bio: 'Sohail works with families and young adults to create safer conversations, stronger emotional awareness, and more sustainable coping tools.',
  },
  {
    name: 'Mira Shah',
    qualification: 'MA in Counselling Psychology',
    experience: '6 years experience',
    specialization: 'Self-esteem, grief support, life transitions',
    bio: 'Mira creates a grounded, compassionate space where clients can slow down, feel understood, and move forward with more confidence.',
  },
  {
    name: 'Ritika Verma',
    qualification: 'PG Diploma in Child & Adolescent Counselling',
    experience: '7 years experience',
    specialization: 'Child therapy, behavioral concerns, school-related stress',
    bio: 'Ritika believes children and teens thrive when they feel consistently seen, supported, and gently guided through their challenges.',
  },
];

export default function OurTeam() {
  return (
    <section id="our-team" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm tracking-widest uppercase mb-6" style={{ color: '#6F6F6F' }}>Our team</p>
        <h2 className="text-4xl sm:text-5xl mb-6 animate-fade-rise" style={{ fontFamily: 'var(--font-display)', color: 'var(--title-brown)' }}>
          Meet the <span style={{ color: '#6F6F6F', fontStyle: 'italic' }}>therapists</span>
        </h2>
        <p className="max-w-2xl text-base leading-relaxed mb-14" style={{ color: '#6F6F6F' }}>
          Every therapist at Happiness Project brings a combination of professional training, reflective sensitivity, and genuine care to the work they do.
        </p>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          {initialTherapists.map((therapist) => (
            <article key={therapist.name} className="team-card liquid-card rounded-[28px] p-6 sm:p-8">
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full border border-white/20 bg-white/10">
                    <div className="flex h-full w-full items-center justify-center text-xl" style={{ fontFamily: 'var(--font-display)', color: '#000' }}>
                      {therapist.name.split(' ').map((part) => part[0]).slice(0, 2).join('')}
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl mb-2" style={{ fontFamily: 'var(--font-display)', color: 'var(--title-brown)' }}>
                      {therapist.name}
                    </h3>
                    <p className="text-sm uppercase tracking-[0.18em]" style={{ color: '#6F6F6F' }}>
                      {therapist.qualification}
                    </p>
                  </div>
                </div>

                <div className="grid gap-3 text-sm sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <p className="text-[11px] uppercase tracking-[0.2em] mb-1" style={{ color: '#6F6F6F' }}>Experience</p>
                    <p className="text-base" style={{ color: '#000' }}>{therapist.experience}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <p className="text-[11px] uppercase tracking-[0.2em] mb-1" style={{ color: '#6F6F6F' }}>Specialization</p>
                    <p className="text-base" style={{ color: '#000' }}>{therapist.specialization}</p>
                  </div>
                </div>

                <p className="text-sm leading-relaxed" style={{ color: '#6F6F6F' }}>
                  {therapist.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
