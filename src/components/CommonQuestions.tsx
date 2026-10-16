import { useState } from 'react';

const faqs = [
  { q: 'How do I know if I need counselling?', a: "If you're experiencing stress, anxiety, emotional difficulties, relationship challenges, low mood, or simply feel overwhelmed by life's demands, counselling can offer a safe space to explore your concerns." },
  { q: 'Is everything I share confidential?', a: 'Yes. Confidentiality is one of the most important aspects of therapy. Your privacy is treated with the highest level of care.' },
  { q: 'How many sessions will I need?', a: 'It varies from person to person. Some benefit from a few sessions, others need longer-term support depending on their goals.' },
  { q: 'Do you counsel children and teenagers?', a: 'Yes,age-appropriate counselling for children and adolescents facing emotional, behavioural, academic or social challenges.' },
  { q: 'Do you offer couple and family counselling?', a: 'Yes. We work with couples and families to improve communication, resolve conflict, and strengthen relationships.' },
  { q: 'Can I book an appointment directly?', a: 'Yes, contact us through phone, WhatsApp, or the form on this page.' },
];

export default function CommonQuestions() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="common-questions" className="px-6 sm:px-8 lg:px-12 py-20 lg:py-28">
      <div className="w-full grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 items-start">
        <div className="lg:sticky lg:top-8">
        <p className="eyebrow">Before you write to us</p>
        <h2 className="section-title mb-6">
          Questions people <span className="italic">usually ask.</span>
        </h2>
        <p className="lead max-w-md mb-8">
          Can't find what you're looking for? We're happy to answer anything before you book.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="tel:+917907493123"
            className="rounded-full bg-[#3e6b58] px-8 py-4 text-base text-[#f8f5ec] transition-transform hover:scale-[1.03]"
          >
            Call us
          </a>
          <a
            href="https://wa.me/917907493123"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[#3e6b58] px-8 py-4 text-base text-[#3e6b58] transition-transform hover:scale-[1.03]"
          >
            WhatsApp us
          </a>
        </div>
        </div>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={f.q} className="liquid-card rounded-[1.25rem] px-6 py-5 sm:px-8 sm:py-6">
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full text-left flex justify-between items-center gap-4"
              >
                <span className="text-xl sm:text-2xl text-[#26453a]" style={{ fontFamily: 'var(--font-display)' }}>{f.q}</span>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#3e6b58] text-xl text-[#f8f5ec]">{openIdx === i ? '−' : '+'}</span>
              </button>
              {openIdx === i && (
                <p className="lead pt-4 max-w-3xl">{f.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}