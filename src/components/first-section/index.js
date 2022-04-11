import React, { useRef } from "react";
import Devil from "../../assets/images/devil.png";

const FirstSection = () => {
    
    const firstSection = useRef(null);

    return (
        <div className="container-fluid first-section-background" ref={firstSection}>
            <div className="row">
                <div className="col-md-7 text-center py-5">
                    <h1 className="text-black text-uppercase first-title" >  Mint countdown: TBA</h1>
                    <button type="button" className="btn btn-dark text-uppercase first-button">Mint</button>
                </div>
                <div className="col-md-5 text-end first-image">
                    <img src={Devil} alt="devil" className="devil-image" />
                </div>
            </div>
        </div>
    );
};

export default FirstSection;