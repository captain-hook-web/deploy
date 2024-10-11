import { useState } from "react";
import Container from "../container/Container";
import DATA from "../../../data/data";
import Wood from "/wood.png";
import "./style.css";

function Faq() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="FAQ bg-purple-gradient pb-20 xl:pb-40">
            <img src={Wood} alt="wood" loading="lazy" className="w-full h-[60px] lg:h-auto object-cover mb-20 xl:mb-40"/>

            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0">
                    <div className="flex items-center justify-center">
                        <ul className="w-[95%] flex flex-col items-center gap-5">
                            {DATA.FAQ.map((item, index) => (
                                <li key={index} data-question={item.id} className={`${activeIndex === index ? "scale-[1.1] transition-[1s]" : " hover:scale-[1.1] transition-[1s]"}`}>
                                    <button onClick={() => handleClick(index)} className="w-full h-full ribeye-regular text-white text-base md:text-xl">
                                        {item.question}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex justify-center">
                        <div className="w-full max-w-[400px] h-[550px] bg-paper-FAQ bg-no-repeat bg-[length:100%_100%] p-[40px] md:p-[60px] flex items-center justify-center">
                            {DATA.FAQ.map((item, index) => (
                                <div key={index}>
                                    {activeIndex === index && <p className="open-sans-Medium text-center text-smoky-gray text-lg">{item.answer}</p>}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Faq;