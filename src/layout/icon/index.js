import React from "react";

// ----- react-icons import -----
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { FaMediumM } from "react-icons/fa";


const Icon = () => {
    return (
        <div className="icon-style">
            <a href="https://twitter.com">
                <AiFillTwitterCircle className="svg-size-fir" />
            </a><br />

            <a href="https://discord.com">
                <BsDiscord className="svg-size-sec" />
            </a><br />

            <a href="https://medium.com">
                <FaMediumM className="svg-size-thi" />
            </a>
        </div>
    );
};

export default Icon;