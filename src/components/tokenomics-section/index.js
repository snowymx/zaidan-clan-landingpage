import React from "react";

import Portfolio from "../../assets/images/tokenomics-50.png";
import Investments from "../../assets/images/tokenomics-35.png";
import Costs from "../../assets/images/tokenomics-15.png";

import useWindowDimensions from "../../customHook/useWindowDimensions";

const TokenomicsSection = () => {

    const { width } = useWindowDimensions();

    return (
        <div className={ width <= 768 ? "container-fluid tokenomics-section-background p-2" : "container-fluid tokenomics-section-background p-5" }>
            <div className="py-5">
                <div className="text-center py-4">
                    <h2 className="text-uppercase pb-3 tokenomics-sec-title">Tokenomics</h2>
                </div>
                <div className="row text-center">
                    <div className="col">
                        <img src={Portfolio} alt="DAG Portfolio" width="60%" />
                    </div>
                    <div className="col">
                        <img src={Investments} alt="Investments" width="60%" className="tokenomics-sec-image" />
                    </div>
                    <div className="col">
                        <img src={Costs} alt="Other Costs" width="60%" className="tokenomics-sec-image" />
                    </div>
                </div>
            </div>
            <div className={ width <= 768 ? "tokenomics-second-part p-2": "tokenomics-second-part p-5" }>
                <h2 className="pb-3 tokenomics-sec-list-title">Holding a Zaidan Clan NFT gives you:</h2>
                <ul className="tokenomics-sec-list">
                    <li className="pb-3">Partial ownership to the DAG nodes purchased.</li>
                    <li className="pb-3">Eligibility for "Revenue Shared Model" for income generated from DAG nodes.</li>
                    <li className="pb-3">Voting power for decisions made regarding the project.</li>
                    <li className="pb-3">A lifetime ticket to weekly giveaways.</li>
                </ul>
            </div>
        </div>
    );
};

export default TokenomicsSection;
