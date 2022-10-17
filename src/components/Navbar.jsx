import { useState } from "react";

import logo from "../img/logo.svg";
import menu from "../img/icon-hamburger.svg";
import closeMenu from "../img/icon-close.svg";

export default function Navbar() {
    let [isMenu, setIsMenu] = useState(() => false);

    function toggleMenu(isMenu) {
        return isMenu ? "" : "hidden" 
    }

    function handleToggle() {
        setIsMenu(prevValue => !prevValue)
    }

    return (
        <nav className="relative py-4 flex justify-between items-center">
            <div>
               <img src={ logo } alt="logo" className="min-w-[4em] max-w-[6em]" />
            </div>

            <ul className={`${toggleMenu(isMenu)} py-5 shadow-[1px_1px_5px_1px_gray] rounded w-full text-center bg-veryLightGray space-y-4 absolute md:static top-14 md:flex md:space-x-4 md:items-center md:space-y-0 md:justify-center md:py-0 md:shadow-none md:bg-transparent cursor-pointer`}>
                <li className="hover:text-darkGrayishBlue text-xs font-bold">Pricing</li>
                <li className="hover:text-darkGrayishBlue text-xs font-bold">About Us</li>
                <li className="hover:text-darkGrayishBlue text-xs font-bold">Product</li>
                <li className="hover:text-darkGrayishBlue text-xs font-bold">Careers</li>
                <li className="hover:text-darkGrayishBlue text-xs font-bold">Community</li>
            </ul>

            <button className="hidden md:block px-3 py-1 bg-brightRed rounded-full text-brightRedSupLight text-xs min-w-[8em] hover:bg-brightRedLight">Get Started</button>

            <div onClick={ handleToggle } className="md:hidden max-h-[1em] cursor-pointer">
                <img src={ isMenu ? closeMenu : menu} alt="menu" className="w-full"/>
            </div>
        </nav>
    )
}