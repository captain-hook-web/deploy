import Container from "../container/Container";
import DATA from "../../../data/data";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import "./style.css";

function Roadmap() {

    return (
        <div className="Roadmap bg-purple-gradient py-20 xl:py-40">
            <Container>
                <h3 className="relative z-20 ribeye-regular text-white text-4xl text-center mb-20">Roadmap</h3>
                <div className="relative z-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 sm:gap-5 xl:gap-0">
                    {DATA.ROADMAP.map(item => {
                        const { id } = item;
                        return (
                            <div key={id}>
                                <ScrollAnimation animateOnce={true} animateIn="animate__fadeInUp" delay={item.id * 100}>
                                    <h4 className="ribeye-regular text-white text-2xl lg:text-xl xl:text-2xl text-center">{item.title}</h4>
                                    <p className="text-white text-xl text-center my-3">{item.subtitle1}</p>
                                    <h4 className="ribeye-regular text-white text-2xl lg:text-xl xl:text-[1.1rem] text-center">{item.subtitle2}</h4>
                                    <div className="h-[320px] w-[300px] xl:w-auto mx-auto mt-5 p-3 pl-5 pt-0 hover:scale-[1.1] transition-[1s] cursor-default" data-phase={item.title}>
                                        <ul className="h-full open-sans-Medium text-smoky-gray text-base text-center flex flex-col items-center justify-center gap-2">
                                            {item.content.map(item => (
                                                <li key={item}>{(id === 1 || id === 2) ? <svg className="inline-block mb-1 mr-1 " width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8.78592 4.87738C10.0791 4.87266 11.3185 4.35929 12.2362 3.44821C13.7659 1.92969 16.2341 1.92969 17.7638 3.44821C18.6815 4.35929 19.9209 4.87266 21.2141 4.87738C23.3694 4.88524 25.1148 6.63056 25.1226 8.78592C25.1273 10.0791 25.6407 11.3185 26.5518 12.2362C28.0703 13.7659 28.0703 16.2341 26.5518 17.7638C25.6407 18.6815 25.1273 19.9209 25.1226 21.2141C25.1148 23.3694 23.3694 25.1148 21.2141 25.1226C19.9209 25.1273 18.6815 25.6407 17.7638 26.5518C16.2341 28.0703 13.7659 28.0703 12.2362 26.5518C11.3185 25.6407 10.0791 25.1273 8.78592 25.1226C6.63056 25.1148 4.88524 23.3694 4.87738 21.2141C4.87266 19.9209 4.35929 18.6815 3.44821 17.7638C1.92969 16.2341 1.92969 13.7659 3.44821 12.2362C4.35929 11.3185 4.87266 10.0791 4.87738 8.78592C4.88524 6.63056 6.63056 4.88524 8.78592 4.87738Z" fill="#464646" stroke="#C7C7C7" />
                                                    <path d="M7.21249 14.7657C7.91426 13.5997 9.55041 13.4599 10.4398 14.49L11.1643 15.3289C11.9219 16.2063 13.2643 16.2579 14.087 15.4412L19.3213 10.2454C20.2258 9.34757 21.728 9.51338 22.4149 10.5869L23.0767 11.6211C23.6496 12.5165 23.4221 13.7036 22.5587 14.3236L13.703 20.6831C13.02 21.1736 12.1033 21.1845 11.4088 20.7105L7.45845 18.014C6.58283 17.4163 6.32573 16.2391 6.87242 15.3308L7.21249 14.7657Z" fill="#1ED300" />
                                                </svg>
                                                    : null}{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </div>
    );
}

export default Roadmap;