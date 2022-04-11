import React from "react";
import Logo from "../../assets/images/logo.png";

// ----- react-icons import -----
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { FaMediumM } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="container-fluid bg-black py-3 footer-layout-style">
            <div className="text-center">
                <a href="/" className="footer-lay-logo text-warning">
                    <img src={Logo} alt="logo" className="logo-image-footer" />{' '}
                    zaidan clan{' '}
                    <img src={Logo} alt="logo" className="logo-image-footer" />
                </a>
            </div>
            <div className="text-center">
                <a href="https://twitter.com/ZaidanClan">
                    <AiFillTwitterCircle className="svg-size-fir" />
                </a>

                <a href="https://discord.gg/ywnDUjsT7b">
                    <BsDiscord className="svg-size-sec mx-4" />
                </a>

                <a href="https://medium.com/@samuraieth2/%E8%B2%A1%E5%9B%A3-zaidan-in-japanese-means-foundation-2be51b0550e6">
                    <FaMediumM className="svg-size-thi" />
                </a>
            </div>
        </div>
    );
};

export default Footer;