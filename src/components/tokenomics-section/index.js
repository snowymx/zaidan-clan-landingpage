import React from "react";

import Portfolio from "../../assets/images/70.png";
import Investments from "../../assets/images/15_pt.1.png";
import Costs from "../../assets/images/15.png";

import useWindowDimensions from "../../customHook/useWindowDimensions";

const TokenomicsSection = () => {

    const { width } = useWindowDimensions();

    return (
        <div className={ width <= 768 ? "container-fluid tokenomics-section-background p-2" : "container-fluid tokenomics-section-background p-0" }>
            <div className="py-5">
                <div className="text-center py-4">
                    <h2 className="text-uppercase pb-3 tokenomics-sec-title text-black">Tokenomics</h2>
                </div>
                <div className="tokenomic-content">
                    <div className="mb-1">
                        <h3 className="text-black">70% Constellation Ecosystem</h3>
                        <ul className="text-black">
                            <li>75% DAG NODES</li>
                            <li>25% Constellation Ecosystem (LTX, ADS, DODI, etc.)</li>
                            <li>Distribution of 25% determined via community voting.</li>
                        </ul>
                    </div>
                    <div className="mb-1">
                        <h3 className="text-black">15% Investments Outside of Constellation</h3>
                        <ul className="text-black">
                            <li>Blue Chip High Yield Projects (BCHY); determined via voting.</li>
                            <li>50% of the BCHY are compounded.</li>
                            <li>35% allocated to community rewards/giveaways.</li>
                            <li>15% team distribution</li>
                        </ul>
                    </div>
                    <div className="mb-1">
                        <h3 className="text-black">15% Project Costs</h3>
                        <ul className="text-black">
                            <li>Team Distribution</li>
                            <li>Marketing</li>
                            <li>Development</li>
                            <li>Partnerships</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TokenomicsSection;
