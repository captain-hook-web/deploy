import Button from "/button-presale&team.png";

function BigButton({ text, link }) {
    return (
        <a href={link} className="block w-[300px] h-[81px] relative hover:-translate-y-2 transition-[1s]">
            <img src={Button} alt="button" loading="lazy" className=" w-full h-full" />
            <span className="ribeye-regular text-2xl text-white text-center leading-[75px] w-full h-full absolute top-0 left-0 z-10">{text}</span>
        </a>
    );
}

export default BigButton;