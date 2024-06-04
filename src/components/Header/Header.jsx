import "./Header.scss";
import menu from "../../assets/Icons/hamburger_menu_icon.svg";
import close from "../../assets/Icons/close_hamburger_menu_icon.svg";
import logo from "../../assets/Icons/logo_icon.svg";
import { useState } from "react";

function Header() {
    const [menuOpen, setMenuOpen] = useState(true); // Control the "hamburger icon" menu

    //Function to toggle the menu
    const ToggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <nav className="nav">
                <div className="header_wrapper">
                <img src={logo} alt="logo" className="logo" />
                <img src={menu} onClick={ToggleMenu} alt="Hamburger Menu" className={` ${menuOpen ? "menu" : "menu_alt"}`} />
                <img src={close} onClick={ToggleMenu} alt="Hamburger Menu" className={` ${menuOpen ? "close_alt" : "close"}`} />
                </div>
                <header className={`header ${menuOpen ? "active" : ""}`}>

                    <ul className={`header_list ${menuOpen ? "" : "active"}`}>
                        <li className="header_list_item">
                            <a onClick={ToggleMenu} href="#About">About</a>
                        </li>
                        <li className="header_list_item">
                            <a onClick={ToggleMenu} href="#Education">Education</a>
                        </li>
                        <li className="header_list_item">
                            <a onClick={ToggleMenu} href="#Technical_Skills">Technical Skills</a>
                        </li>
                        <li className="header_list_item">
                            <a onClick={ToggleMenu} href="#Work_Experience">Work Experience</a>                        </li>
                        <li className="header_list_item">
                            <a onClick={ToggleMenu} href="#Contact">Contact</a>
                        </li>
                    </ul>
                </header>
            </nav>
            <nav className="nav_desktop">
                    <img src={logo} alt="logo" className="logo_desktop" />
                    <ul className="nav_desktop_list">
                        <li className="header_list_item">
                            <a href="#About">About</a>
                        </li>
                        <li className="header_list_item">
                            <a href="#Education">Education</a>
                        </li>
                        <li className="header_list_item">
                            <a href="#Technical_Skills">Technical Skills</a>
                        </li>
                        <li className="header_list_item">
                            <a href="#Work_Experience">Work Experience</a>
                        </li>
                        <li className="header_list_item">
                            <a href="#Contact">Contact</a>
                        </li>
                    </ul>
            </nav>
        </>
    )
}

export default Header;