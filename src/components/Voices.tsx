export default function Voices() {
  return (
    <section id="voices" className="px-6 py-32">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm tracking-widest uppercase mb-6" style={{ color: '#6F6F6F' }}>In their words</p>
        <h2 className="text-4xl sm:text-5xl mb-10" style={{ fontFamily: 'var(--font-display)', color: '#000' }}>
          Real people. <span style={{ color: '#6F6F6F', fontStyle: 'italic' }}>Real experiences.</span>
        </h2>
        <p className="max-w-xl mx-auto text-sm leading-relaxed" style={{ color: '#6F6F6F' }}>
          Testimonials will appear here once collected — with written consent — from clients. Names
          can be withheld or shortened to initials on request.
        </p>
      </div>
    </section>
  );
}