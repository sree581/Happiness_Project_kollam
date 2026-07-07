export default function ReachUs() {
  return (
    <section id="reach-us" className="px-6 py-32 bg-black text-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <p className="text-sm tracking-widest uppercase mb-6" style={{ color: '#9C9C9C' }}>Reach us</p>
          <h2 className="text-4xl sm:text-5xl mb-8" style={{ fontFamily: 'var(--font-display)' }}>
            Taking the first step <span style={{ color: '#9C9C9C', fontStyle: 'italic' }}>doesn't have to be hard.</span>
          </h2>
          <p className="text-sm leading-relaxed mb-10" style={{ color: '#9C9C9C' }}>
            Whether you're seeking help for yourself, your child, your relationship or your family —
            we're here to listen.
          </p>

          <div className="space-y-3 text-sm" style={{ color: '#9C9C9C' }}>
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
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-4"
        >
          <input placeholder="Name" className="bg-transparent border-b hairline pb-3 text-sm outline-none placeholder:text-[#6F6F6F]" />
          <input placeholder="Phone Number" className="bg-transparent border-b hairline pb-3 text-sm outline-none placeholder:text-[#6F6F6F]" />
          <input placeholder="Email" className="bg-transparent border-b hairline pb-3 text-sm outline-none placeholder:text-[#6F6F6F]" />
          <textarea placeholder="Message" rows={4} className="bg-transparent border-b hairline pb-3 text-sm outline-none placeholder:text-[#6F6F6F]" />
          <button type="submit" className="rounded-full px-8 py-3 text-sm bg-white text-black w-fit mt-4 transition-transform hover:scale-[1.03]">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}