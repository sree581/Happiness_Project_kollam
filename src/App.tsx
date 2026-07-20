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
    </div>
  );
}
