import React from "react";
import useWindowDimensions from "../../customHook/useWindowDimensions";

const AboutSection = () => {

    const { width } = useWindowDimensions();

    return (
        <div className={ width <= 768 ? "container-fluid bg-black text-white p-2" : "container-fluid bg-black text-white p-5" }>
            <div className="text-center pt-3">
                <h2 className="text-uppercase pb-3 holding-title">Holding a Zaidan Clan NFT gives you:</h2>
            </div>
            <div className="p-4 about-sec-content">
                <p>- Partial ownership to the DAG nodes purchased.</p>
                <p>- Eligibility for “Revenue Shared Model” from income generated from all DAG nodes owned by Zaidan Clan.</p>
                <p>- Voting power for decisions made regarding the project.</p>
                <p>- A lifetime ticket to rewards/giveaways.</p>
            </div>
        </div>
    );
};

export default AboutSection;