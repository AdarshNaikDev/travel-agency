import React from "react";
import LoginHeader from "../Components/LoginHeader";
import './AddPackage.css'

const AddPackage = ()=>{

    return(
        <>
        <LoginHeader backButton={true} fromAdmin = {true} />

        <div className="small-heading">
            <h4>
                Let's check everything before publishing
            </h4>
            <p>
                Please make sure all the information is correct & start selling your product
            </p>
        </div>

        <div className="form-travel-pkg">
            <h4 className="small-header fw-bold" >Travel package information</h4>
            <div className="col-divide">
                {/* first column */}
                <div className="col-divide-left">
                    {/* package title */}
                    <div className="pkg-title">
                    <label>Package title</label>
                    <input type="text"/>
                    </div>
                    
                    {/* Base price */}
                    <div className="pkg-title">
                        <label>Base Price</label>
                        <input type="text" />
                    </div>

                    {/* No of days */}
                    <div className="pkg-title">
                        <label>Number of days</label>
                        <input type="text"/>
                    </div>
                </div>
                {/* second column */}
                <div className="col-divide-right">
                
                {/* travel category */}
                <div className="pkg-title">
                    <label>
                        Travel Category
                    </label>
                    <select>
                        <option>
                            North India
                        </option>
                        <option>
                            South India
                        </option>
                    </select>
                </div>

                {/* offer price */}
                <div className="pkg-title">
                <label>Offer Price</label>
                <input type="text"/>
                </div>

                {/* Number of nights */}
                <div className="pkg-title">
                <label>
                    Number of nights
                </label>
                <input type="text"/>
                </div>
              
                </div>
            </div>

            {/* Tour overview */}
            <div className="tour-over">
                <label>
                    Tour Overview
                </label>
                <textarea type="text" />
            </div>
        </div>
        </>
    )
}

export default AddPackage