import React from "react";
import Logo from "../../assets/images/logo.png";

// ----- react-icons import -----
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { FaMediumM } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="container-fluid bg-dark py-3 footer-layout-style">
            <div className="text-center">
                <a href="/" className="footer-lay-logo text-warning">
                    <img src={Logo} alt="logo" className="logo-image-footer" />{' '}
                    zaidan clan{' '}
                    <img src={Logo} alt="logo" className="logo-image-footer" />
                </a>
            </div>
            <div className="text-center">
                <a href="https://twitter.com">
                    <AiFillTwitterCircle className="svg-size-fir" />
                </a>

                <a href="https://discord.com">
                    <BsDiscord className="svg-size-sec mx-4" />
                </a>

                <a href="https://medium.com">
                    <FaMediumM className="svg-size-thi" />
                </a>
            </div>
        </div>
    );
};

export default Footer;