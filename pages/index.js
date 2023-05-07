import { useState } from 'react';
import Image from 'next/image';
import { About, Hero } from '../sections';
import Logo from '../public/logo2white.svg';
import Technology from '../sections/Technology';
import WeBuild from '../sections/WeBuild';
import AppAndDashboard from '../sections/AppAndDashboard';
import OurTeam from '../sections/OurTeam';
import Video from '../sections/Video';
import { Footer } from '../components';
import Contact from '../sections/Contact';
import NewProjectReal from '../sections/NewProjectReal';

const Home = () => {
  const [language, setLanguage] = useState('en');

  function toggleLanguage() {
    setLanguage(language === 'en' ? 'id' : 'en');
  }

  return (

    <div className="bg-primary-black overflow-hidden" style={{ background: '#000000' }}>
      <div style={{ background: '#000000' }}>
        <div className="w-[40%] inset-0 gradient-02" />
        <div className="lg:w-[80%] w-[100%] pt-20 mx-auto flex justify-between gap-8 sm:px-16 px-6">
          <div style={{ position: 'relative' }}>
            <Image src={Logo} width="140" alt="Logo 1" quality="100" priority />
          </div>
          {language === 'en' && (<img title="Ubah Bahasa" src="/indonesia.png" alt="flag indo" className="w-[30px] h-[30px] object-contain cursor-pointer" onClick={toggleLanguage} />)}
          {language === 'id' && (<img title="Change Language" src="/en.png" alt="flag inggris" className="w-[30px] h-[30px] object-contain cursor-pointer" onClick={toggleLanguage} />)}
        </div>
        <Hero language={language} />
      </div>
      <div style={{ background: '#000000' }}>
        <About language={language} />
        <Technology language={language} />
      </div>
      <div style={{ background: '#000000' }}>
        <Video />
        <WeBuild />
        <AppAndDashboard />
      </div>
      <div style={{ background: '#000000' }}>
        <OurTeam />
      </div>
      <div>
        <NewProjectReal />
        <Contact />
      </div>
      <div style={{ background: '#000000' }}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
