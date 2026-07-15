import { useState } from 'react';

const faqs = [
  { q: 'How do I know if I need counselling?', a: "If you're experiencing stress, anxiety, emotional difficulties, relationship challenges, low mood, or simply feel overwhelmed by life's demands, counselling can offer a safe space to explore your concerns." },
  { q: 'Is everything I share confidential?', a: 'Yes. Confidentiality is one of the most important aspects of therapy. Your privacy is treated with the highest level of care.' },
  { q: 'How many sessions will I need?', a: 'It varies from person to person. Some benefit from a few sessions, others need longer-term support depending on their goals.' },
  { q: 'Do you counsel children and teenagers?', a: 'Yes — age-appropriate counselling for children and adolescents facing emotional, behavioural, academic or social challenges.' },
  { q: 'Do you offer couple and family counselling?', a: 'Yes. We work with couples and families to improve communication, resolve conflict, and strengthen relationships.' },
  { q: 'Can I book an appointment directly?', a: 'Yes — contact us through phone, WhatsApp, or the form on this page.' },
];

export default function CommonQuestions() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="common-questions" className="px-6 py-32">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm tracking-widest uppercase mb-6" style={{ color: '#6F6F6F' }}>Before you write to us</p>
        <h2 className="text-4xl sm:text-5xl mb-16" style={{ fontFamily: 'var(--font-display)', color: '#000' }}>
          Questions people <span style={{ color: '#6F6F6F', fontStyle: 'italic' }}>usually ask.</span>
        </h2>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={f.q} className="liquid-card rounded-[1.25rem] px-5 py-4">
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full text-left flex justify-between items-center gap-4"
              >
                <span className="text-lg" style={{ fontFamily: 'var(--font-display)', color: '#000' }}>{f.q}</span>
                <span style={{ color: '#6F6F6F' }}>{openIdx === i ? '−' : '+'}</span>
              </button>
              {openIdx === i && (
                <p className="pt-4 text-sm leading-relaxed max-w-2xl" style={{ color: '#6F6F6F' }}>{f.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}