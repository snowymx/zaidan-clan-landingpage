import React from "react";
import useWindowDimensions from "../../customHook/useWindowDimensions";

const AboutSection = () => {

    const { width } = useWindowDimensions();

    return (
        <div className={ width <= 768 ? "container-fluid bg-black text-white p-2" : "container-fluid bg-black text-white p-5" }>
            <div className="text-center pt-3">
                <h2 className="text-uppercase pb-3 about-sec-title">About</h2>
            </div>
            <div className="p-4 about-sec-content">
                <p>Owning a DAG node outright is out of reach for many of us. What would be the next best thing? Being part owner amongst your peers.
                </p>
                <p>How ser? How can I own part of a DAG node?</p>
                <p>Well my fren, the answer to that is 5,500 Zaidan Clan Samurai NFTs! The majority of the proceeds will be used to purchase DAG nodes and other tokens of the ecosystem. We will reinvest pre-mainnet rewards to accumulate more nodes.</p>
                <p>NFT holders will be eligible for receiving revenue generated from DAG nodes (post mainnet) & other investments. Read our tokenomics for better understanding.
                </p>
            </div>
        </div>
    );
};

export default AboutSection;