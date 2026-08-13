import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import HowWeHelp from './components/HowWeHelp';
import OurTeam from './components/OurTeam';
import OurWay from './components/OurWay';
import CommonQuestions from './components/CommonQuestions';
import Voices from './components/Voices';
import ReachUs from './components/ReachUs';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="text-black page-smooth relative overflow-x-hidden" style={{ background: 'linear-gradient(180deg, #dce3c7 0%, #e1e8cf 52%, #d0d9bb 100%)' }}>
      <span className="petal-accent left-8 top-72 delay-1" />
      <span className="petal-accent right-12 top-1/3 delay-2" />
      <span className="petal-accent left-1/3 bottom-20 delay-3" />
      <Hero />
      <WhoWeAre />
      <HowWeHelp />
      <OurTeam />
      <OurWay />
      <CommonQuestions />
      <Voices />
      <ReachUs />
      <Footer />
  <a
  href="https://wa.me/917907493123"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat with Happiness Project on WhatsApp"
  className="
    fixed
    bottom-6
    right-6
    z-[99990]
    flex
    h-14
    w-14
    items-center
    justify-center
    rounded-full
    bg-[#25D366]
    text-white
    shadow-[0_8px_30px_rgba(0,0,0,0.18)]
    transition-all
    duration-300
    hover:scale-110
    hover:shadow-[0_10px_35px_rgba(0,0,0,0.25)]
    md:bottom-8
    md:right-8
  "
>
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-7 w-7"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.67-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982 1-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.986 2.896a9.824 9.824 0 012.893 6.994c-.002 5.45-4.437 9.886-9.885 9.886m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.89c0 2.096.547 4.142 1.588 5.946L.094 24l6.304-1.654a11.882 11.882 0 005.65 1.438h.005c6.554 0 11.89-5.335 11.893-11.89a11.821 11.821 0 00-3.482-8.406" />
  </svg>
</a>
    </div>
  );
}
