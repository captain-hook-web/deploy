import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Parallax from "./components/parallax/Parallax";
import RailSlider from "./components/railSlider/RailSlider";
import Play from "./components/play/Play";
import Gear from "/gear.png";
import Gear2 from "/gear-2.png";
import Gear3 from "/gear-3.png";
import Gear4 from "/gear-4.png";
import About from "./components/about/AboutCH";
import Presale from "./components/presale/Presale";
import Capt from "./components/capt/Capt";
import Roadmap from "./components/roadmap/Roadmap";
import Team from "./components/team/Team";
import Faq from "./components/faq/Faq";
import img1 from "/1.png";
import img2 from "/2.png";
import img3 from "/3.png";
import img4 from "/4.png";
import img5 from "/5.png";
import img6 from "/6.png";
import img7 from "/7.png";

import { initGA } from './analytics';
import { useEffect } from "react";

function App() {


  useEffect(() => {
    initGA('G-H3WDBJ820H');
  }, []);

  return (
    <main className="w-full max-w-[1920px] mx-auto overflow-hidden">
      <Header />
      <Parallax />
      <RailSlider
        gears={{ src1: Gear, src2: Gear, src3: Gear, }}
        imagesSlider={[img5, img3, img2, img4, img5, img3, img2, img4, img5, img3, img2, img4,]}
      />
      <Play />
      <About />
      <RailSlider
        gears={{ src1: Gear2, src2: Gear3, src3: Gear4, }}
        imagesSlider={[img1, img6, img7, img1, img6, img7, img1, img6, img7]}
      />
      <Presale />
      <Capt />
      <Roadmap />
      <Team />
      <Faq />
      <Footer />
    </main>
  );
}

export default App;