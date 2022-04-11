import React from "react";

// ----- react-icons import -----
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { FaMediumM } from "react-icons/fa";


const Icon = () => {
    return (
        <div className="icon-style">
            <a href="https://twitter.com/ZaidanClan">
                <AiFillTwitterCircle className="svg-size-fir" />
            </a><br />

            <a href="https://discord.gg/ywnDUjsT7b">
                <BsDiscord className="svg-size-sec" />
            </a><br />

            <a href="https://medium.com/@samuraieth2/%E8%B2%A1%E5%9B%A3-zaidan-in-japanese-means-foundation-2be51b0550e6">
                <FaMediumM className="svg-size-thi" />
            </a>
        </div>
    );
};

export default Icon;