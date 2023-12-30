import React from "react";
import LoginHeader from "../Components/LoginHeader";
import { FaStar } from "react-icons/fa";
import "./ViewSinglePackage.css";

function ViewSinglePackage() {
  const bggImages = [
    {
      backgroundImage: `url('img1.png')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      gridRowStart: 1,
      gridRowEnd: 4,
      gridColumnStart: 1,
      gridColumnEnd: 4,
      borderTopLeftRadius: "8px",
      borderBottomLeftRadius: "8px",
    },
    {
      backgroundImage: `url('img2.png')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      borderTopRightRadius: "8px",
      borderBottomRightRadius: "8px",
    },
    {
      backgroundImage: `url('img3.png')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      borderTopRightRadius: "8px",
      borderBottomBottomRadius: "8px",
    },
    {
      backgroundImage: `url('img4.png')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      borderTopRightRadius: "8px",
      borderBottomRightRadius: "8px",
    },
  ];
  return (
    <>
      <LoginHeader backButton={true} />

      <div className="ms-5 mt-4 ">
        <h3 className="mt-2 ms-5">Coastal Karnataka Tour</h3>
        <div className="d-flex ms-5 ps-2">
          <FaStar color="#7BD3EA" size={25} />
          <p className="ms-2 text-muted">South India</p>
        </div>
      </div>

      {/* 4 image collage starts */}
      <div className="image-parent">
        <div style={bggImages[0]}></div>
        <div style={bggImages[1]}></div>
        <div style={bggImages[2]}></div>
        <div style={bggImages[3]}></div>
      </div>

      {/* grid Component which contains form description and accordion*/}
      <div className="grid-comp">
        <div className="grid-comp-left">
          <div className="small-desc text-muted">
            <h3 className="text-black">Coastal Karnataka Tour Overview</h3>
            <p className="ps-1">
              Coastal Karnataka tour is a special package offering a visit to
              all the coastal towns and sightseeing of famous tourist
              attractions of Karnataka. It is a 7 day 6 night package which
              includes meals, accommodation, transportation, pickup & drop and
              sightseeing activities.
            </p>
            <hr style={{ marginTop: "3px" }} />
          </div>
          <div
            className="accordion-comp"
            style={{ backgroundColor: "lightblue" }}
          >
            accordion design
          </div>
        </div>

        <div className="form-cont" >
          <div className="form-card">
            <h5 className="ms-5 pt-4">Starting from just ₹3799/- only</h5>

            <div className="input-fields">
              <div className="field-fullName">
                <p className="text-muted fw-bold">Full Name</p>
                  <input placeholder="Your Name" style={{overflow:'none', borderTop:'none',borderLeft:'none', borderRight:'none', borderBottom:'3px solid rgb(180, 180, 180)', width:'318px'}}/> 
              </div>

              <div className="email-phone d-flex ms-4 mt-4">
                <div className="field-email">
                <p className="text-muted fw-bold">Email address</p>
                <input placeholder="Your Email address" style={{width:'150px' ,overflow:'none', borderTop:'none', borderRight:'none', borderLeft:'none', borderBottom:'3px solid rgb(180, 180, 180)',width:'140px'}}/>
                </div>
                <div className="field-phone">
                <p className="text-muted fw-bold">Phone Number</p>
                <input placeholder="Your Phone number" style={{width:'150px', overflow:'none', borderTop:'none', borderRight:'none',borderLeft:'none', borderBottom:'3px solid rgb(180, 180, 180)'}}/>
                </div>
                
              </div>

              <div className="city-drop ms-4">
                <p className="text-muted fw-bold">
                  City of Residence
                </p>
                <select>
                  <option>Select city</option>
                  <option>Bengaluru</option>
                </select>
              </div>

              <div className="no-date d-flex ms-4 mt-4 mb-2">
                <div className="no-people">
                <p className="text-muted fw-bold">No of People</p>
                <select >
                  <option>
                    Select
                  </option>
                  <option>
                    5
                  </option>
                </select>
                </div>

                <div className="date-fieldd">
                <p className="text-muted fw-bold ">Expected date of travel</p>
               <input type="date"/>
                </div>
                
              </div>

            </div>
            <div className="btn-desc">
              <button className="enq-btn fw-bold text-white">ENQUIRE</button>
              <p>You won't be charged yet</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewSinglePackage;
