import Bg1 from "/presale-bg-3.jpg";
import BgMobile1 from "/presale-bg-3-mobile.jpg";
import Bg2 from "/presale-bg-4.jpg";
import BgMobile2 from "/presale-bg-4-mobile.jpg";
import Container from "../container/Container";
import BigButton from "../bigButton/BigButton";
import Treasure from "/treasure.png";
import Staking from "/Staking.png";
import RewardPool from "/RewardPool.png";
import Liquidity from "/Liquidity.png";
import Marketing from "/Marketing.png";
import DevTeam from "/Dev-Team.png";
import PreSale from "/Pre-Sale.png";
import Treasury from "/Treasury.png";
import Bg3 from "/presale-bg-5.jpg";
import BgMobile3 from "/presale-bg-5-mobile.jpg";
import Boat from "/boat.png";
import Gradient from "/gradient.png";
import GradientMobile from "/gradient-mobile.png";
import "./style.css";

function Capt() {
    return (
        <>
            <div className="relative">
                <div className="absolute z-10 left-0 bottom-[100px] sm:bottom-[450px] md:bottom-[600px] lg:bottom-[-65px] xl:bottom-0 w-full">
                    <Container>
                        <h3 className="mb-40 $CAPT-Token ribeye-regular text-white text-4xl text-center">$CAPT TOKEN</h3>
                        <div className="hidden w-full max-w-[850px] mx-auto p-5 my-5 rounded-[12px] bg-[#ffffff1c]">
                            <p className="open-sans-Medium text-white text-lg text-center mb-3">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos tempore et dolore, suscipit, fugit eveniet quas nam asperiores temporibus ipsam ratione. Tempore ipsa vel beatae iure, alias incidunt dolor voluptate dicta ipsum? Assumenda unde officiis iure? Modi quos ex ipsa expedita explicabo nobis rerum numquam fuga aliquam, totam architecto reprehenderit.
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <BigButton text={"Buy $CAPT Now"} link={"#"} />
                        </div>
                    </Container>
                </div>
                <img src={Bg1} alt="background CAPT TOKEN" loading="lazy" className="hidden lg:block w-full" />
                <img src={BgMobile1} alt="background CAPT TOKEN" loading="lazy" className="lg:hidden w-full" />
            </div>
            <div className="relative">
                <figure className="absolute z-20 w-[800px] h-[760px] left-[calc(50%-400px)] top-[calc(50%-380px)] scale-[.5] sm:scale-[.7] md:scale-[.8] lg:scale-[.6] xl:scale-[1] xxl:scale-[1.2]">
                    <img src={Treasure} alt="treasure" loading="lazy" className="w-full h-full" />
                    <img src={Staking} alt="Staking" loading="lazy" className="labal-1 absolute left-[43px] top-[180px]" />
                    <img src={RewardPool} alt="Reward Pool" loading="lazy" className="labal-7 absolute left-[95px] top-[428px]" />
                    <img src={Liquidity} alt="Liquidity" loading="lazy" className="labal-3 absolute left-[225px] top-[120px]" />
                    <img src={Marketing} alt="Marketing" loading="lazy" className="labal-4 absolute left-[245px] top-[275px]" />
                    <img src={DevTeam} alt="Dev & Team" loading="lazy" className="labal-5 absolute left-[380px] top-[100px]" />
                    <img src={PreSale} alt="Pre Sale" loading="lazy" className="labal-6 absolute right-[35px] top-[200px]" />
                    <img src={Treasury} alt="Treasury" loading="lazy" className="labal-2 absolute right-[110px] top-[350px]" />
                </figure>
                <img src={Bg2} alt="background CAPT TOKEN" loading="lazy" className="hidden lg:block w-full" />
                <img src={BgMobile2} alt="background CAPT TOKEN" loading="lazy" className="lg:hidden w-full" />
            </div>
            <div className="relative">
                <img src={Boat} alt="boat" loading="lazy" className="boat w-[90%] md:w-[70%] absolute z-10 bottom-0 left-[5%] md:left-[15%]" />
                <img src={Bg3} alt="background CAPT TOKEN" loading="lazy" className="hidden lg:block w-full" />
                <img src={BgMobile3} alt="background CAPT TOKEN" loading="lazy" className="lg:hidden w-full h-[400px] sm:h-[500px] md:h-[600px]" />
                <img src={Gradient} alt="gradient" loading="lazy" className="hidden lg:block w-full h-[450px] absolute left-0" />
                <img src={GradientMobile} alt="gradient" loading="lazy" className="w-full lg:hidden absolute left-0" />
            </div>
        </>
    );
}

export default Capt;