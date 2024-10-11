import DATA from "../../../data/data";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import "./style.css";


function Stage() {

    return (
        DATA.STAG.map(item => (
            <div key={item.id} className="parent-stage xl:hover:scale-[1.1] xl:transition-[1s]">
                <ScrollAnimation animateOnce={true} animateIn="animate__fadeInUp" delay={item.id * 100}>
                    <div className="h-full flex flex-col items-center gap-1" data-stage={item.title}>
                        <h4 className="ribeye-regular text-smoky-gray text-xl xl:text-2xl text-center">{item.title}</h4>
                        <div className="flex flex-col items-center open-sans-Medium text-smoky-gray text-lg">
                            <span className="font-bold">Price</span>
                            <span>{item.price}</span>
                        </div>
                        <div className="flex flex-col items-center open-sans-Medium text-smoky-gray text-lg">
                            {item.title !== "DEX Launch" && (
                                <>
                                    <span className="font-bold">Goal</span>
                                    <span>{item.goal}</span>
                                </>
                            )}
                        </div>
                        <span className="open-sans-Medium text-smoky-gray text-lg">
                            <span className="font-bold">
                                start
                            </span>
                        </span>
                        <span className="open-sans-Medium text-smoky-gray text-base">{item.start}</span>
                    </div>
                </ScrollAnimation>
            </div>
        ))
    );
}

export default Stage;