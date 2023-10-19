import React from "react";
import './PopularPackage.css';

const PopularPackage = ()=>{

    return(
        <>
        <h3 className="pop-title">POPULAR PACKAGES</h3>
        <div className="pkg-container">
        <div className="india" >
            <p className="sub-heading">Indian Tour Packages</p>
            <button className="pkg-btn"><span className="tour-no">205</span> Tours</button>
        </div>
        <div className="south-asia" >
        <p className="sub-heading-asia">Asia Tour Packages</p>
        <button className="pkg-btn"><span className="tour-no">15</span> Tours</button>
        </div>
        <div className="europe" >
        <p className="sub-heading-asia">Europe Tour Packages</p>
        <button className="pkg-btn"><span className="tour-no">38</span> Tours</button>
        </div>
        <div className="africa">
        <p className="sub-heading">Africa Tour Packages</p>
        <button className="pkg-btn"><span className="tour-no">85</span> Tours</button>
        </div>
        </div>
        <div className="view-all-btn-div">
        <button className="btn-va">VIEW ALL PACKAGES</button>
        </div>
        </>
    )
}

export default PopularPackage;