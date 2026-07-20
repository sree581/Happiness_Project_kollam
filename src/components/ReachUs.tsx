import { useState } from 'react';

const WHATSAPP_NUMBER = '917907493123';

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
    <section id="reach-us" className="px-6 py-20">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <p className="text-sm tracking-widest uppercase mb-6" style={{ color: '#6F6F6F' }}>Reach us</p>
          <h2 className="text-4xl sm:text-5xl mb-8" style={{ fontFamily: 'var(--font-display)', color: 'var(--title-brown)' }}>
            Taking the first step <span style={{ color: '#6F6F6F', fontStyle: 'italic' }}>doesn't have to be hard.</span>
          </h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: '#6F6F6F' }}>
            Whether you're seeking help for yourself, your child, your relationship or your family —
            we're here to listen.
          </p>

          <div className="space-y-3 text-sm" style={{ color: '#6F6F6F' }}>
            <p>Near Natchiar Mutt Temple, Jawahar Nagar, Kollam, Kerala</p>
            <p>+91 79074 93123 (Phone / WhatsApp)</p>
            <p>English, Malayalam</p>
          </div>

          <p className="text-xs leading-relaxed mt-12 max-w-sm" style={{ color: '#6F6F6F' }}>
            If you or someone you know is in crisis or experiencing thoughts of self-harm, please
            reach out to a local emergency helpline immediately or visit the nearest hospital — this
            website is not equipped for emergency response.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <input
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="bg-transparent border-b hairline pb-3 text-sm outline-none placeholder:text-[#6F6F6F]"
          />
          <input
            placeholder="Phone Number"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="bg-transparent border-b hairline pb-3 text-sm outline-none placeholder:text-[#6F6F6F]"
          />
          <input
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="bg-transparent border-b hairline pb-3 text-sm outline-none placeholder:text-[#6F6F6F]"
          />
          <textarea
            placeholder="Message"
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="bg-transparent border-b hairline pb-3 text-sm outline-none placeholder:text-[#6F6F6F]"
          />
          <button type="submit" className="rounded-full px-8 py-3 text-sm bg-white text-black w-fit mt-4 transition-transform hover:scale-[1.03]">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}