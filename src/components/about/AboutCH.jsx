import Container from "../container/Container";
import SmallButton from "../smallButton/SmallButton";
import Button2 from "/button-2.png";
import Button3 from "/button-3.png";
import Fish from "/fish.png";
import Bubble1 from "/bubble-1.png";
import Bubble2 from "/bubble-2.png";
import Bubble3 from "/bubble-3.png";
import Bubble4 from "/bubble-4.png";
import Bubble5 from "/bubble-5.png";
import "./style.css";

function About() {
    return (
        <div className="About py-20 xl:py-40 bg-stick-about bg-[length:100%_100%]">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12">
                    <div className="lg:col-span-9 order-2 lg:order-1">
                        <div className="bg-paper-play-mobile lg:bg-paper-about bg-[length:100%_100%] p-[40px] pb-[60px] md:p-[60px] md:pb-[100px] 2xl:p-[90px] 2xl:pb-[120px] pt-[130px] md:pt-[130px] lg:pt-[60px] 2xl:pt-[90px]">
                            <h3 className="ribeye-regular text-smoky-gray text-4xl mb-10">About Caption Hook</h3>
                            <p className="open-sans-Medium text-smoky-gray text-lg">
                                Captain Hook is an exhilarating play-to-earn fishing game that invites players into a vibrant world of maritime adventure. Built on the Binance Smart Chain, the game combines thrilling gameplay with real-world earning potential. Whether you’re reeling in rare fish or upgrading your gear, every aspect of Captain Hook is designed to maximize enjoyment and reward.
                                <br />
                                Our dedicated and experienced team is the driving force behind this project. With a rich background in game development, they bring a wealth of expertise to ensure a seamless and engaging experience. Committed to delivering a high-quality game, the team’s combined skills and passion for gaming fuel our ambition to make Captain Hook a standout success in the play-to-earn space.
                            </p>
                        </div>
                        <div className="flex items-center justify-center lg:justify-start gap-x-3 -translate-y-[30px] lg:-translate-y-[65px] lg:pl-24">
                            <SmallButton text={"AUDIT"} src={Button2} link={"https://app.solidproof.io/projects/captain-hook"} />
                            <SmallButton text={"KYC"} src={Button3} link={"https://github.com/solidproof/Projects/blob/main/2024/Captain%20Hook/KYC_Certificate_SolidProof_Captain_Hook.jpg"} />
                        </div>
                    </div>
                    <div className="lg:col-span-3 h-[160px] lg:h-full order-1 lg:order-2">
                        <figure className="relative w-fit mx-auto lg:top-[450px] xl:top-[350px] lg:right-[20px] lg:scale-[1.5]">
                            <img src={Fish} alt="fish" loading="lazy" className="fish"/>
                            <img src={Bubble1} alt="bubble" loading="lazy" className="bubble-1 absolute w-[55px] top-[-40px] right-[60px]" />
                            <img src={Bubble2} alt="bubble" loading="lazy" className="bubble-2 absolute top-[-25px] left-[85px]" />
                            <img src={Bubble3} alt="bubble" loading="lazy" className="bubble-3 absolute w-[50px] bottom-[10px]" />
                            <img src={Bubble3} alt="bubble" loading="lazy" className="bubble-4 absolute w-[50px] top-[-40px] left-[55px]" />
                            <img src={Bubble3} alt="bubble" loading="lazy" className="bubble-5 absolute w-[50px] top-[-5px] right-[105px]" />
                            <img src={Bubble4} alt="bubble" loading="lazy" className="bubble-6 absolute top-[20px] -left-[30px]" />
                            <img src={Bubble5} alt="bubble" loading="lazy" className="bubble-7 absolute w-[55px] bottom-[45px] -left-[25px]" />
                        </figure>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default About;