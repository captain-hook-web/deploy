import Container from "../container/Container";
import SmallButton from "../smallButton/SmallButton";
import Button from "/button-1.png";
import "./style.css";

function Play() {
    return (
        <div className="py-20 xl:py-40 bg-blue bg-cover">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 xl:gap-10 2xl:gap-20">
                    <div className="flex items-center">
                        {/* <figure className="w-full">
                            <img src={Cover} alt="cover" loading="lazy" className="w-full" />
                        </figure> */}
                        <div className="video-frame w-full h-[300px] md:h-[400px]">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/XdupdAvTM5Y"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                    <div>
                        <div className="bg-paper-play-mobile lg:bg-paper-play bg-no-repeat bg-[length:100%_100%] p-[40px] md:p-[60px] 2xl:p-[90px]">
                            <h3 className="ribeye-regular text-smoky-gray text-4xl text-center mb-10">Play Captain Hook</h3>
                            <p className="open-sans-Medium text-smoky-gray text-lg">
                                Set sail on an unforgettable fishing journey with Captain Hook, your gateway to a thrilling play-to-earn adventure on the Binance Smart Chain. Cast your line into a vibrant ocean teeming with opportunities, reel in diverse fish, and transform your catches into real rewards. As you dive deeper, enhance your ship and gear to boost your earning potential and efficiency. Whether you’re new to the play-to-earn scene or a seasoned player, Captain Hook offers a captivating and rewarding experience. Join the adventure and chart your course to becoming the ultimate sea captain!
                            </p>
                        </div>
                        <div className="hidden justify-center -translate-y-[25px] lg:-translate-y-[55px]">
                            <SmallButton src={Button} text={"Play now"} link={"#"} />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Play;