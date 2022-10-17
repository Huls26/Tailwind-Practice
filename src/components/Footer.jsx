import logo from "../img/logo-white.svg";
import iFacebook from "../img/icon-facebook.svg";
import iYoutube from "../img/icon-youtube.svg";
import iTwitter from "../img/icon-twitter.svg";
import iPinterest from "../img/icon-pinterest.svg";
import iInstagram from "../img/icon-instagram.svg";

export default function Footer() {
    return (
        <div id="footer-container" className="mb-6 max-w-md mx-auto md:flex md:flex-row-reverse md:justify-between md:max-w-none">
            <div id="input-footer" className=" flex space-x-2 mb-5">
                <input type="text" placeholder="Updated in your inbox" className="px-3 py-0.5 rounded-full basis-full max-h-8"/>

                <a href="" className="px-4 py-1 bg-brightRed rounded-full text-brightRedSupLight text-sm hover:bg-brightRedLight max-h-8">Go</a>
            </div>

            <div className="px-5 mb-8 text-brightRedSupLight flex justify-between max-w-md mx-auto md:space-x-20">
                <ul className="space-y-2">
                    <li className="hover:text-brightRedLight cursor-pointer">Home</li>
                    <li className="hover:text-brightRedLight cursor-pointer">Pricing</li>
                    <li className="hover:text-brightRedLight cursor-pointer">Products</li>
                    <li className="hover:text-brightRedLight cursor-pointer">About</li>
                </ul>

                <ul className="space-y-2">
                    <li className="hover:text-brightRedLight cursor-pointer">Careers</li>
                    <li className="hover:text-brightRedLight cursor-pointer">Community</li>
                    <li className="hover:text-brightRedLight cursor-pointer">Privacy Policy</li>
                </ul>
            </div>

            <div className="flex flex-col items-center mb-7 space-y-7 md:flex-col-reverse md:space-y-0  md:justify-between md:items-start">
                <ul className="flex space-x-2">
                    <li className="w-7"><img className="w-full" src={iFacebook} alt="facebook" /></li>
                    <li className="w-7"><img className="w-full" src={iYoutube} alt="youtube" /></li>
                    <li className="w-7"><img className="w-full" src={iTwitter} alt="twitter" /></li>
                    <li className="w-7"><img className="w-full" src={iPinterest} alt="pinterest" /></li>
                    <li className="w-7"><img className="w-full" src={iInstagram} alt="instagram" /></li>
                </ul>

                <div className="flex justify-center">
                    <img src={logo} alt="logo" />
                </div>
            </div>
        </div>
    )
}