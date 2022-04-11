import React from "react";

const RoadmapSection = () => {
    return (
        <div className="container-fluid roadmap-section-background">
            <div className="p-5">
                <h2 className="text-uppercase pb-3" style={{ fontSize: '60px', borderBottom: '2px solid #212529', display: 'inline-block' }}>Roadmap V1.0</h2>
                <ul className="py-5" style={{ fontSize: '24px' }}>
                    <li className="pb-3">Mint 5500 Gen 0 Samurai.</li>
                    <li className="pb-3">Buy DAG nodes.</li>
                    <li className="pb-3">Reinvest rewards and accumulate more DAG.</li>
                    <li className="pb-3">Weekly giveaways.</li>
                    <li className="pb-5">Wait for Constellation mainnet launch.</li>
                </ul>
            </div>
        </div>
    );
};

export default RoadmapSection;