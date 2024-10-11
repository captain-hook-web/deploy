function Container(props) {
    return (
        <section className="w-full max-w-[1280px] 2xl:max-w-[1400px] mx-auto px-[1.25rem] md:px-[2rem] xl:px-0">{props.children}</section>
    );
}

export default Container;