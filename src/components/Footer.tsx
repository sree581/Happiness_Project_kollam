export default function Footer() {
  return (
    <footer className="px-6 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8 text-sm" style={{ color: '#6F6F6F' }}>
        <div>
          <p style={{ fontFamily: 'var(--font-display)', color: '#000' }} className="text-xl mb-3">Happiness Project</p>
          <p>Near Natchiar Mutt Temple, Jawahar Nagar, Kollam, Kerala</p>
          <p>+91 79074 93123</p>
        </div>
        <div className="flex flex-col gap-2">
          <a href="#who-we-are">Who We Are</a>
          <a href="#how-we-help">How We Help</a>
          <a href="#our-way">Our Way</a>
          <a href="#reach-us">Reach Us</a>
        </div>
        <div className="flex flex-col gap-2">
          <span>Instagram · Facebook · WhatsApp</span>
        </div>
      </div>
      <p className="max-w-6xl mx-auto text-xs mt-10 leading-relaxed" style={{ color: '#6F6F6F' }}>
        The information on this website is for general awareness only and is not a substitute for
        professional medical or psychological advice. If you are facing a mental health emergency,
        please contact a local helpline or visit the nearest hospital.
      </p>
    </footer>
  );
}