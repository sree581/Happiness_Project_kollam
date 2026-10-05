import Navbar from './Navbar';

const HERO_IMAGES = [
  { src: '/images/hero/room.jpg', alt: 'A calm, softly lit counselling room' },
  { src: '/images/hero/meditation.jpg', alt: 'Person meditating at sunrise' },
  { src: '/images/hero/ferns.jpg', alt: 'Fresh green fern leaves' },
  { src: '/images/hero/together.jpg', alt: 'Friends sitting together, arms around each other' },
  { src: '/images/hero/forest.jpg', alt: 'A quiet forest path' },
  { src: '/images/hero/sunrise.jpg', alt: 'Person with open arms facing the sunrise' },
];

export default function Hero() {
  return (
    <section id="home" className="relative w-full">
      <div className="relative z-20">
        <Navbar />
      </div>

      <div className="relative min-h-[calc(100vh-7rem)] overflow-hidden">
        {/* Block-wise image collage */}
        <div className="absolute inset-0 z-0 grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 gap-1 bg-[#3e6b58]">
          {HERO_IMAGES.map((img) => (
            <img key={img.src} src={img.src} alt={img.alt} className="h-full w-full object-cover" />
          ))}
        </div>

        {/* Tint in the logo's green */}
        <div
          className="absolute inset-0 z-[1]"
          style={{ background: 'linear-gradient(135deg, rgba(62,107,88,0.88) 0%, rgba(80,122,102,0.78) 55%, rgba(92,135,115,0.62) 100%)' }}
        />

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl flex-col items-start justify-center px-6 py-24 text-left">
          <h1
            className="animate-fade-rise text-5xl sm:text-7xl md:text-8xl max-w-5xl font-normal"
            style={{
              fontFamily: 'var(--font-hero)',
              lineHeight: 1.05,
              letterSpacing: '-1.5px',
              color: '#ffffff',
            }}
          >
            A Safe Space to Talk, Heal and Grow
          </h1>

          <p className="animate-fade-rise-delay text-base sm:text-lg max-w-2xl mt-8 leading-relaxed text-white/85">
            Life isn't always easy, and carrying everything on your own can feel like too much. Whether you're dealing with stress, anxiety, a difficult relationship, or simply need someone who will really listen, Happiness Project is here to support you with compassion, understanding, and professional care.
          </p>

          <p className="animate-fade-rise-delay text-base sm:text-lg max-w-2xl mt-6 leading-relaxed font-semibold text-white">
            You're Not Alone in This.
          </p>

          <div className="animate-fade-rise-delay-2 mt-12 flex flex-wrap gap-4">
            <a
              href="#reach-us"
              className="inline-flex rounded-full bg-[#f8f5ec] px-10 sm:px-14 py-5 text-base text-black transition-transform hover:scale-[1.03]"
            >
              Book an Appointment
            </a>
            <a
              href="#reach-us"
              className="inline-flex rounded-full border border-white/70 px-10 sm:px-14 py-5 text-base text-white transition-transform hover:scale-[1.03]"
            >
              Talk to Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
