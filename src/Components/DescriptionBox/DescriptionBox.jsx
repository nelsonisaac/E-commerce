import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
    return (
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-navbox">Description</div>
                <div className="descriptionbox-navbox fade">Reviews</div>
            </div>
            <div className="descriptionbox-description">
                <p>Web3 is an umbrella term for technologies like blockchain that 
                    decentralize data ownership and control on the internet. 
                    Most internet applications are controlled by centralized 
                    entities that determine how they save and use end-user data. 
                    Instead of centralized management structures, Web3 
                    (also called Web 3.0, decentralized web, or semantic web) 
                    technologies allow for community-driven projects. In these projects, 
                    end users control data, determine pricing, directly contribute to 
                    technical development, and have a more significant say in a project's 
                    direction. 
                </p>
            </div>
        </div>
    )
}

export default DescriptionBox;