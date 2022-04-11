import React from "react";
import Logo from "../../assets/images/logo.png";

// ----- react-icons import -----
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { FaMediumM } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="container-fluid bg-dark py-3">
            <div className="row text-center">
                <div className="col-4" style={{ position: 'relative' }}>
                    <img src={Logo} alt="logo" className="logo-image-footer" style={{ position: 'absolute', right: 0 }} />
                </div>
                <div className="col-4" style={{ alignSelf: 'center' }}>
                    <h2 className="text-warning">Zaidan Clan</h2>
                </div>
                <div className="col-4" style={{ position: 'relative' }}>
                    <img src={Logo} alt="logo" className="logo-image-footer" style={{ position: 'absolute', left: 0 }} />
                </div>
            </div>
            <div className="text-center">
                <a href="http://twitter.com" className="text-white">
                    <AiFillTwitterCircle style={{ width: '56px', height: '56px' }} />
                </a>

                <a href="http://discord.com" className="text-white">
                    <BsDiscord className="mx-4" style={{ width: '52px', height: '52px', }} />
                </a>

                <a href="http://medium.com" className="text-white">
                    <FaMediumM style={{ width: '54px', height: '54px' }} />
                </a>
            </div>
        </div>
    );
};

export default Footer;