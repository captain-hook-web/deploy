function SmallButton({text, src, link}) {
    return ( 
        <a href={link} className="block w-[164px] h-[68px] relative hover:-translate-y-2 transition-[1s]">
            <img src={src} alt="button" loading="lazy" className=" w-full h-full" />
            <span className="ribeye-regular text-lg text-white text-center leading-[55px] w-full h-full absolute top-0 left-0 z-10 ml-[5px]">{text}</span>
        </a>
     );
}

export default SmallButton;