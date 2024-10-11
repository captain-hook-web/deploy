import HeaderDesktop from "./HeaderDesktop";
import HambergerMenu from "./HambergerMenu";
import { useState } from "react";
import "./style.css";

function Header() {

    const [close, setClose] = useState(true);

    function handleHideAndShowMenu(val) {
        setClose(val)
    }

    return (
        <>
            <HeaderDesktop onShow={handleHideAndShowMenu} />
            <HambergerMenu onClose={handleHideAndShowMenu} isClose={close} />
        </>
    );
}

export default Header;