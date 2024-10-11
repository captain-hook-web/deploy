import BigButton from "../bigButton/BigButton";
import Javad from "/Javad.png";
import Mohamad from "/Mohamad.png";
import Amin from "/Amin.png";
import Shahzaib from "/Shahzaib.png";
import Ahmad from "/Ahmad.png";
import Mehdi from "/Mehdi.png";

function Team() {
    return (
        <div className="Team bg-purple-gradient pb-40 lg:pb-0">
            <div className="w-full max-w-[1280px] mx-auto px-[1.25rem] md:px-[2rem] xl:px-0">
                <h3 className="ribeye-regular text-white text-4xl text-center mb-20">Our Team Captains</h3>
                <div className="w-full max-w-[850px] mx-auto p-5 my-5 rounded-[12px] bg-[#ffffff1c]">
                    <p className="open-sans-Medium text-white text-lg text-center mb-3">
                        Behind Captain Hook stands a team of 23 dedicated specialists who bring passion and expertise to every aspect of our project. Each team member plays a crucial role. Meet our team leaders:
                    </p>
                </div>
                <div className="hidden justify-center">
                    <BigButton text={"KYC Report"} link={"#"} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 mt-20 lg:mt-0 lg:translate-y-20 relative">
                    <div className="labal-1 order-6 md:order-1">
                        <a href="https://www.linkedin.com/in/javad-rafiei/" target="_blank" className="flex md:block justify-center">
                            <img src={Javad} alt="Javad" loading="lazy" className="relative z-[1] translate-x-[50px] translate-y-[100px] md:translate-x-0 md:translate-y-0" />
                        </a>
                    </div>
                    <div className="labal-2 md:order-2">
                        <a href="https://www.linkedin.com/in/izadshenasan/" target="_blank" className="flex md:block justify-center">
                            <img src={Mohamad} alt="Mohamad" loading="lazy" />
                        </a>
                    </div>
                    <div className="labal-3 order-4 md:order-3">
                        <a href="https://www.linkedin.com/in/mohamad-amin-valinejad-297917a0/" target="_blank" className="flex md:block justify-center">
                            <img src={Amin} alt="Amin" loading="lazy" className="translate-x-[70px] translate-y-[-90px] md:translate-x-0 md:translate-y-0 lg:translate-x-[50px]" />
                        </a>
                    </div>
                    <div className="labal-4 order-3 md:order-4">
                        <a href="https://www.linkedin.com/in/devshahzaib21/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="flex md:block justify-center">
                            <img src={Shahzaib} alt="Shahzaib" loading="lazy" className="absolute md:block z-[1] translate-x-[-100px] translate-y-[-400px] md:translate-x-0 md:translate-y-0 lg:translate-x-[140px] lg:translate-y-[-100px]" />
                        </a>
                    </div>
                    <div className="labal-5 order-2 md:order-5">
                        <a href="https://www.linkedin.com/in/ahmadreza-khaksari-1aa17b103/?originalSubdomain=uk" target="_blank" className="flex md:block justify-center">
                            <img src={Ahmad} alt="Ahmad" loading="lazy" className="translate-x-[100px] translate-y-[-200px] md:translate-x-0 md:translate-y-0 lg:translate-x-[135px] lg:translate-y-[-240px]" />
                        </a>
                    </div>
                    <div className="labal-6 order-5 md:order-6">
                        <a href="https://www.linkedin.com/in/mehdi-rahmati/" target="_blank" className="flex md:block justify-center">
                            <img src={Mehdi} alt="Mehdi" loading="lazy" className="absolute md:block translate-x-[-50px] translate-y-[-395px] md:translate-x-0 md:translate-y-0 xl:translate-x-[-70px] lg:translate-y-[-255px]" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;