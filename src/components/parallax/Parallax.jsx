import { useRef, useEffect } from "react";
import Parallax from 'parallax-js';
import BgParallax from "/background-parallax.jpg";
import Fog from "/fog.png";
import BigCloud from "/big-cloud.png";
import CloudLeft from "/cloud-left.png";
import CloudRight from "/cloud-right.png";
import Island from "/island.png";
import Ship from "/ship.png";
import Chest from "/chest.png";
import Shark from "/shark.png";
import BalloonLeft from "/balloon-left.png";
import BalloonRight from "/balloon-right.png";
import Capitan from "/capitan-hook.png";
import Capitan2 from "/capitan-hook-2.png";
// import Presale from "/presale.png";
import Container from "../container/Container";
import HeroSection from "../../pages/HeroSection"

import "./style.css";

function ParallaxSection() {

    const sceneRef = useRef(null);

    useEffect(() => {
        const parallaxInstance = new Parallax(sceneRef.current);

        return () => {
            parallaxInstance.destroy();
        };
    }, []);

    return (
        <section className="Presale relative">
            <div ref={sceneRef} className="relative overflow-hidden xl:h-[106vh] 3xl:h-auto">
                <div>
                    <img src={BgParallax} alt="background parallax" loading="lazy" className="w-full h-[500px] lg:h-auto" />
                </div>
                <div className="w-full h-full">
                    <img src={Fog} alt="fog" loading="lazy" className="w-full h-[50%] absolute z-[1] bottom-0" />
                </div>
                <div data-depth="0.05" className="w-full h-full">
                    <img src={BigCloud} alt="cloud" loading="lazy" className="w-full absolute z-[2] bottom-[120px] scale-[1]" />
                </div>
                <div data-depth="0.05" className="w-full h-full">
                    <img src={CloudLeft} alt="cloud" loading="lazy" className="hidden xl:block w-[200px] absolute z-[3] top-[180px] left-[40px]" />
                </div>
                <div data-depth="0.05" className="w-full h-full">
                    <img src={CloudRight} alt="cloud" loading="lazy" className="w-[120px] lg:w-[200px] xl:w-[300px] absolute z-[4] top-[150px] md:top-[100px] xl:top-[150px] right-0 md:right-[100px] xl:right-[150px]" />
                </div>
                <div data-depth="0.08" className="w-full h-full">
                    <img src={Island} alt="island" loading="lazy" className="w-full absolute z-[5] bottom-[60px] scale-[1.3] md:scale-[.8]" />
                </div>
                <div data-depth="0.20" className="w-full h-full">
                    <div className="waves wave-1 bottom-[10px]"></div>
                </div>
                <div data-depth="0.25" className="w-full h-full">
                    <div className="waves wave-2"></div>
                </div>
                <div data-depth="0.30" className="w-full h-full">
                    <img src={Ship} alt="ship" loading="lazy" className="ship w-[150px] md:w-[200px] lg:w-[300px] xl:w-[400px] 2xl:w-[500px] absolute z-[8] left-[-90px] md:left-[25px] 2xl:left-[60px] bottom-[50px] xl:bottom-[60px]" />
                </div>
                <div data-depth="0.35" className="w-full h-full">
                    <div className="waves wave-3"></div>
                </div>
                <div data-depth="0.40" className="w-full h-full">
                    <img src={Chest} alt="chest" loading="lazy" className="chest w-[80px] md:w-[100px] lg:w-[150px] xl:w-[200px] 2xl:w-[250px] absolute z-[10] right-0 md:right-[50px] xl:right-[100px] bottom-[40px] lg:bottom-[50px]" />
                </div>
                <div data-depth="0.45" className="w-full h-full">
                    <div className="waves wave-4"></div>
                </div>
                <div data-depth="0.50" className="w-full h-full">
                    <img src={Shark} alt="shark" loading="lazy" className="swim w-[60px] lg:w-[100px] xl:w-[150px] absolute z-[12] right-0 bottom-0" />
                </div>
                <div data-depth="0.60" className="w-full h-full">
                    <div className="waves wave-5 bottom-[-30px]"></div>
                </div>
                <div data-depth="0.10" className="w-full h-full">
                    <img src={BalloonLeft} alt="balloon" loading="lazy" className="balloon-left w-[80px] md:w-[100px] lg:w-[150px] xl:w-[200px] absolute z-[14]] top-[150px] md:top-[50px] xl:top-0 2xl:top-[80px] left-0 md:left-[50px] lg:left-[200px] xl:left-[250px] 2xl:left-[350px]" />
                </div>
                <div data-depth="0.10" className="w-full h-full">
                    <img src={BalloonRight} alt="balloon" loading="lazy" className="balloon-right hidden xl:block w-[150px] 2xl:w-[180px] absolute z-[15] right-[250px] top-[200px]" />
                </div>
                <div className="w-full h-full">
                    <img src={Capitan} alt="balloo" loading="lazy" className="md:hidden w-[300px] absolute z-[14] right-[calc(50%-150px)] bottom-[50px]" />
                    <img src={Capitan2} alt="balloo" loading="lazy" className="hidden md:block w-[350px] lg:w-[400px] xl:w-[500px] 2xl:w-[600px] absolute z-[14] right-[calc(50%-175px)] lg:right-[calc(50%-200px)] xl:right-[calc(50%-250px)] 2xl:xl:right-[calc(50%-300px)] bottom-[80px] 2xl:bottom-[150px]" />
                </div>
                <div className="w-full h-full">
                    <p className="w-[320px] absolute right-[calc(50%-160px)] top-[50px] ribeye-regular text-white text-base text-center md:hidden">
                        Exciting Play-to-Earn Fishing Game.
                        Play, Explore, Enjoy, and Get Rich!
                    </p>
                </div>
            </div>
            <div className="w-full bg-navy-blue xl:bg-transparent pb-20 xl:p-0">
                <div className="w-full relative xl:absolute xl:top-0 xl:left-0 xl:before:content-none before:content-[''] before:absolute before:top-[-50px] before:left-0 before:w-full before:h-[50px] before:bg-linear-gradient">
                    <Container>
                        <div className="flex justify-center xl:justify-end">
                            {/* <img src={Presale} alt="presale" loading="lazy" className="xl:scale-[.9] xxl:scale-[1] xl:translate-x-[40px] xxl:translate-x-[25px] xl:mt-[80px] xxl:mt-[200px]" /> */}
                            <HeroSection/>
                        </div>
                    </Container>
                </div>
            </div>
        </section>
    );
}

export default ParallaxSection;