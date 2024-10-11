import DATA from "../../../data/data";
import Logo from "/Captain-Hook-Logo.png";
import PresaleSlider from "../presaleSlider/PresaleSlider";
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';


function HeaderDesktop({ onShow }) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`w-full xl:w-full xl:absolute xl:z-[1000] xl:top-0 xl:left-0 ${isScrolled ? 'scrolled' : ''}`}>
            <div className="w-full max-w-[1280px] 2xl:max-w-[1400px] mx-auto">
                <div className="grid grid-cols-12 gap-x-[8px] xl:mt-[24px]">
                    <div className="hidden xl:flex xl:items-center xl:justify-center xl:col-span-1 h-[88px] bg-dark-navy rounded-[8px]">
                        <figure className="w-[80px] h-[80px]">
                            <img src={Logo} alt="Capitan Hook" loading="lazy" className="w-full h-full" />
                        </figure>
                    </div>
                    <div className="col-span-12 xl:col-span-11 xl:space-y-[8px]">
                        <nav className="h-[60px] xl:h-[50px] bg-dark-navy xl:rounded-[8px] px-[16px]">
                            <div className="h-full grid grid-cols-2 xl:grid-cols-12">
                                <div className="xl:col-span-7 flex items-center">
                                    <svg onClick={() => onShow(false)} width="20" height="15" className="xl:hidden cursor-pointer" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.25 1.5C0.25 1.086 0.586 0.75 1 0.75H19C19.414 0.75 19.75 1.086 19.75 1.5C19.75 1.914 19.414 2.25 19 2.25H1C0.586 2.25 0.25 1.914 0.25 1.5ZM19 6.75H1C0.586 6.75 0.25 7.086 0.25 7.5C0.25 7.914 0.586 8.25 1 8.25H19C19.414 8.25 19.75 7.914 19.75 7.5C19.75 7.086 19.414 6.75 19 6.75ZM19 12.75H1C0.586 12.75 0.25 13.086 0.25 13.5C0.25 13.914 0.586 14.25 1 14.25H19C19.414 14.25 19.75 13.914 19.75 13.5C19.75 13.086 19.414 12.75 19 12.75Z" fill="white" />
                                    </svg>
                                    <ul className="hidden h-full xl:flex items-center space-x-6 open-sans-Medium text-white text-base">
                                        {DATA.HEADER_LEFT.map(item => {
                                            if (item.text === "$12,000 Giveaway") {
                                                return (
                                                    <li key={item.id} className="cursor-pointer">
                                                        <a href="https://gleam.io/PJyiu/captain-hook-giveaway">{item.text}</a>
                                                    </li>
                                                )
                                            } else {
                                                return (
                                                    <li key={item.id} className="cursor-pointer">
                                                        <Link
                                                            to={item.text === "$CAPT Token" ? "$CAPT-Token" : item.text}
                                                            spy={true}
                                                            smooth={true}
                                                            offset={item.text === "Team" ? -150 : item.text === "$CAPT Token" ? -150 : -10}
                                                            duration={1000}
                                                        >
                                                            {item.text}
                                                        </Link>
                                                    </li>
                                                )
                                            }
                                        })}
                                    </ul>
                                </div>
                                <div className="xl:col-span-5 flex items-center justify-end space-x-6">
                                    <div className="flex items-center gap-10 xl:hidden">
                                        <a href="https://captain-hook.gitbook.io/white-paper" className="open-sans-Medium text-base text-sunset-yellow">Whitepaper</a>
                                        <figure className="h-[55px] w-[55px]">
                                            <img src={Logo} alt="Capitan Hook" loading="lazy" className="h-[55px] w-[55px]" />
                                        </figure>
                                    </div>
                                    <ul className="hidden h-full xl:flex items-center justify-end space-x-6 open-sans-Medium text-base">
                                        {DATA.HEADER_RIGHT.map(item => {
                                            let styles;
                                            if (item.text === "AUDIT") {
                                                styles = "bg-sunset-yellow w-[75px] h-[30px] text-smoky-gray rounded-[8px] leading-[30px]";
                                            } else if (item.text === "KYC") {
                                                styles = "bg-sunset-yellow w-[59px] h-[30px] text-smoky-gray rounded-[8px] leading-[30px]";
                                            } else if (item.text === "Play") {
                                                styles = "hidden";
                                            } else {
                                                styles = "text-sunset-yellow";
                                            }
                                            return (
                                                <li key={item.id} className={styles} >
                                                    <a href={item.link} className="block w-full h-full text-center">{item.text}</a>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                    <ul className="hidden xl:flex items-center space-x-6 border-l-[1px] border-storm-gray pl-6">
                                        <li>
                                            <a href="https://x.com/captainHookGame">
                                                <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17.94 4.49002C17.95 4.66002 17.95 4.84002 17.95 5.02002C17.95 10.36 13.83 16.51 6.28999 16.51C3.96999 16.51 1.81 15.85 0 14.7C0.33 14.74 0.650005 14.75 0.990005 14.75C2.91001 14.75 4.67 14.11 6.08 13.03C4.28 12.99 2.77 11.83 2.25 10.23C2.5 10.27 2.76 10.29 3.02 10.29C3.39 10.29 3.76001 10.24 4.10001 10.15C2.22001 9.77001 0.809998 8.15002 0.809998 6.19002V6.14001C1.36 6.44001 1.99 6.63001 2.66 6.65001C1.56 5.92001 0.830002 4.69001 0.830002 3.29001C0.830002 2.54001 1.03 1.85002 1.39 1.25002C3.41 3.70002 6.44 5.30001 9.84 5.48001C9.78 5.18001 9.74001 4.87001 9.74001 4.56001C9.74001 2.33001 11.57 0.52002 13.84 0.52002C15.02 0.52002 16.09 1.01001 16.83 1.79001C17.76 1.62001 18.64 1.28002 19.43 0.820023C19.13 1.76002 18.48 2.55001 17.63 3.04001C18.45 2.95001 19.25 2.73001 19.99 2.42001C19.43 3.22001 18.73 3.93001 17.93 4.51001L17.94 4.49002Z" fill="white"></path>
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://t.me/Captain_Hook_Game">
                                                <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.23998 6.96001C6.06998 4.84001 9.28999 3.45 10.91 2.77C15.51 0.840004 16.47 0.51 17.09 0.5C17.23 0.5 17.53 0.530002 17.73 0.690002C17.9 0.830002 17.94 1.01 17.97 1.14C17.99 1.27 18.02 1.57 18 1.8C17.75 4.44 16.67 10.83 16.12 13.78C15.89 15.03 15.43 15.45 14.99 15.49C14.03 15.58 13.3 14.85 12.36 14.24C10.9 13.28 10.08 12.68 8.65999 11.74C7.01999 10.66 8.07998 10.06 9.01998 9.09C9.25998 8.84 13.51 4.96001 13.59 4.60001C13.6 4.56001 13.61 4.39 13.51 4.31C13.41 4.22 13.27 4.25 13.17 4.28C13.02 4.31 10.69 5.85999 6.17998 8.92999C5.51998 9.38999 4.91999 9.61001 4.37999 9.60001C3.78999 9.59001 2.64998 9.26001 1.79998 8.99001C0.759978 8.65001 -0.0600001 8.47 0.00999985 7.89C0.0499999 7.59 0.45998 7.28 1.23998 6.97V6.96001Z" fill="white"></path>
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        <div className="h-[30px] bg-steel-gray px-[16px] xl:rounded-[8px]">
                            <PresaleSlider />
                        </div>
                    </div>
                </div>
            </div>
        </header >
    );
}

export default HeaderDesktop;