import React from "react";

import useWindowDimensions from "../../customHook/useWindowDimensions";

const RoadmapSection = () => {

    const { width } = useWindowDimensions();

    return (
        <div className="container-fluid roadmap-section-background">
            <div className={ width <= 768 ? "p-2": "p-5" }>
                <div style={{ display: 'block' }}>
                    <h2 className="text-uppercase pb-3 roadmap-sec-title text-black">Roadmap V1.0</h2>
                </div>
                <ul className="roadmap-sec-list text-black">
                    <li className="pb-3">Mint 5500 Gen 0 Samurai.</li>
                    <li className="pb-3">Buy DAG nodes.</li>
                    <li className="pb-3">Reinvest rewards and accumulate more DAG.</li>
                    <li className="pb-3">Wait for Constellation Mainnet launch.</li>
                    <li className="pb-3">Giveaways/Rewards.</li>
                </ul>
            </div>
        </div>
    );
};

export default RoadmapSection;