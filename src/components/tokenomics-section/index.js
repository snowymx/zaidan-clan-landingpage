import React from "react";

import Portfolio from "../../assets/images/tokenomics-50.png";
import Investments from "../../assets/images/tokenomics-35.png";
import Costs from "../../assets/images/tokenomics-15.png";

const TokenomicsSection = () => {
    return (
        <div className="container-fluid tokenomics-section-background p-5">
            <div className="py-5">
                <div className="text-center py-4">
                    <h2 className="text-uppercase pb-3" style={{ borderBottom: '3px solid #212529', fontSize: '60px', display: 'inline-block' }}>Tokenomics</h2>
                </div>
                <div className="row text-center">
                    <div className="col">
                        <img src={Portfolio} alt="DAG Portfolio" width="60%" />
                    </div>
                    <div className="col" style={{ position: 'relative' }}>
                        <img src={Investments} alt="Investments" width="70%" style={{ position: 'absolute', left: '50%', bottom: 0, transform: 'translate(-50%, 0)' }} />
                    </div>
                    <div className="col" style={{ position: 'relative' }}>
                        <img src={Costs} alt="Other Costs" width="60%" style={{ position: 'absolute', left: '50%', bottom: 0, transform: 'translate(-50%, 0)' }} />
                    </div>
                </div>
            </div>
            <div className="p-5">
                <h2 className="pb-3" style={{ fontSize: '50px', fontWeight: 700 }}>Holding a Zaidan Clan NFT gives you:</h2>
                <ul style={{ fontSize: '24px', fontWeight: "bold" }}>
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