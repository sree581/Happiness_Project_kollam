import { useState } from 'react';

const WHATSAPP_NUMBER = '917907493123';

const SERVICE_AREAS = ['Kerala', 'Tamil Nadu', 'Karnataka', 'Delhi'];
const LANGUAGES = ['English', 'Malayalam', 'Tamil', 'Hindi'];

const inputClass =
  'w-full rounded-xl border border-[#d9dfd3] bg-white px-4 py-3.5 text-base text-[#26453a] outline-none transition placeholder:text-[#8a938e] focus:border-[#3e6b58] focus:ring-2 focus:ring-[#3e6b58]/20';

function InfoCard({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="liquid-card flex gap-5 rounded-[1.5rem] p-6">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#3e6b58] text-[#f8f5ec]">
        {icon}
      </span>
      <div>
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#3e6b58]">{title}</p>
        {children}
      </div>
    </div>
  );
}

function Chips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li key={item} className="rounded-full border border-[#d6ddd2] bg-white/80 px-4 py-1.5 text-base text-[#26453a]">
          {item}
        </li>
      ))}
    </ul>
  );
}

const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  className: 'h-6 w-6',
  'aria-hidden': true,
};

export default function ReachUs() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const text = [
      `Name: ${form.name || 'Not provided'}`,
      `Phone: ${form.phone || 'Not provided'}`,
      `Email: ${form.email || 'Not provided'}`,
      '',
      `Message: ${form.message || 'No message added'}`,
    ].join('\n');

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="reach-us" className="px-6 sm:px-8 lg:px-12 py-20 lg:py-28">
      <div className="mb-14 max-w-3xl">
        <p className="eyebrow">Reach us</p>
        <h2 className="section-title mb-6">
          Taking the first step <span className="italic">doesn't have to be hard.</span>
        </h2>
        <p className="lead">
          Whether you're seeking help for yourself, your child, your relationship or your family —
          we're here to listen.
        </p>
      </div>

      <div className="w-full grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
        {/* Contact details */}
        <div className="grid gap-4">
          <InfoCard
            title="Visit us"
            icon={<svg {...iconProps}><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></svg>}
          >
            <p className="body-text">Near Natchiar Mutt Temple, Jawahar Nagar, Kollam, Kerala</p>
          </InfoCard>

          <InfoCard
            title="Call or WhatsApp"
            icon={<svg {...iconProps}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.8 2z" /></svg>}
          >
            <a href="tel:+917907493123" className="text-xl font-medium text-[#26453a] hover:underline">
              +91 79074 93123
            </a>
          </InfoCard>

          <InfoCard
            title="Service areas"
            icon={<svg {...iconProps}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></svg>}
          >
            <Chips items={SERVICE_AREAS} />
          </InfoCard>

          <InfoCard
            title="Languages supported"
            icon={<svg {...iconProps}><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" /></svg>}
          >
            <Chips items={LANGUAGES} />
          </InfoCard>

          <p className="mt-2 rounded-2xl border border-[#e3c9a8] bg-[#fbf3e6] px-5 py-4 text-base leading-relaxed text-[#6b4f2e]">
            If you or someone you know is in crisis or experiencing thoughts of self-harm, please
            reach out to a local emergency helpline immediately or visit the nearest hospital — this
            website is not equipped for emergency response.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-[2rem] border border-[#dfe5da] bg-[#fbfaf6] p-6 shadow-[0_25px_70px_rgba(36,51,47,0.10)] sm:p-10"
        >
          <h3 className="mb-2 text-3xl" style={{ fontFamily: 'var(--font-display)' }}>Send us a message</h3>
          <p className="body-text mb-8">Your message opens in WhatsApp, ready to send.</p>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-medium text-[#26453a]">
              Name
              <input
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass}
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-[#26453a]">
              Phone Number
              <input
                type="tel"
                placeholder="+91"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={inputClass}
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-[#26453a] sm:col-span-2">
              Email
              <input
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass}
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-[#26453a] sm:col-span-2">
              Message
              <textarea
                placeholder="Tell us a little about what you're looking for"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={inputClass}
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-8 w-full rounded-full bg-[#3e6b58] px-8 py-4 text-base font-medium text-[#f8f5ec] transition-transform hover:scale-[1.02] sm:w-auto"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
