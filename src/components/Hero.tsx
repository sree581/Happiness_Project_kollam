import { useEffect, useRef, useState } from 'react';
import Navbar from './Navbar';

const VIDEO_URL = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let raf: number | null = null;

    const updateOpacity = () => {
      if (video.duration) {
        const t = video.currentTime;
        const d = video.duration;
        if (t < 0.5) setOpacity(t / 0.5);
        else if (t > d - 0.5) setOpacity(Math.max(0, (d - t) / 0.5));
        else setOpacity(1);
      }
      raf = requestAnimationFrame(updateOpacity);
    };

    raf = requestAnimationFrame(updateOpacity);

    const onEnded = () => {
      setOpacity(0);
      setTimeout(() => {
        video.currentTime = 0;
        video.play();
      }, 100);
    };

    video.addEventListener('ended', onEnded);

    return () => {
      if (raf !== null) cancelAnimationFrame(raf);
      video.removeEventListener('ended', onEnded);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-white">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-white" />
        <div className="absolute z-0 inset-x-0 top-[300px] bottom-0">
          <video
            ref={videoRef}
            src={VIDEO_URL}
            autoPlay
            muted
            playsInline
            className="h-full w-full object-cover"
            style={{ opacity, transition: 'opacity 0.1s linear' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        </div>
      </div>

      <div className="relative z-10">
        <Navbar />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col items-center justify-center px-6 pb-40 text-center">
        
        <h1
          className="animate-fade-rise text-5xl sm:text-7xl md:text-8xl max-w-7xl font-normal"
          style={{
            fontFamily: 'var(--font-display)',
            lineHeight: 0.95,
            letterSpacing: '-2.46px',
            color: '#000000',
          }}
        >
          A Safe Space to Talk, Heal and Grow
        </h1>

        <p className="animate-fade-rise-delay text-base sm:text-lg max-w-2xl mt-8 leading-relaxed" style={{ color: '#6F6F6F' }}>
          Life isn't always easy, and carrying everything on your own can feel like too much. Whether you're dealing with stress, anxiety, a difficult relationship, or simply need someone who will really listen, Happiness Project is here to support you — with compassion, understanding, and professional care.
        </p>

        <p className="animate-fade-rise-delay text-base sm:text-lg max-w-2xl mt-6 leading-relaxed font-semibold" style={{ color: '#000000' }}>
          You're Not Alone in This.
        </p>

        <div className="animate-fade-rise-delay-2 mt-12 flex flex-wrap justify-center gap-4">
          <a
            href="#reach-us"
            className="inline-flex rounded-full bg-black px-14 py-5 text-base text-white transition-transform hover:scale-[1.03]"
          >
            Book an Appointment
          </a>
          <a
            href="#reach-us"
            className="inline-flex rounded-full border border-black px-14 py-5 text-base text-black transition-transform hover:scale-[1.03]"
          >
            Talk to Us
          </a>
        </div>
      </div>
    </section>
  );
}
