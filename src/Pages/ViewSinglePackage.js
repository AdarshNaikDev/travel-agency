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

        <div className="form-cont" style={{ backgroundColor: "orange" }}>
          <div className="form-card">
            <h5>Starting from just ₹3799/- only</h5>

            <div className="input-fields">
              <div className="full-name">
                <p>Full Name</p>
                <div>
                  <input />
                </div>
              </div>

              <div className="email-phone">
                <div>
                  <p>Email address</p>
                  <div>
                    <input/>
                  </div>
                </div>

                <div>
                  <p>Phone number</p>
                  <div>
                    <input/>
                  </div>
                </div>
              </div>

              <div className="city-drop">
                <p>
                  City of Residence
                </p>
                <select>
                  <option>Select city</option>
                </select>
              </div>

              <div className="no-date">
                <div>
                <p>No of People</p>
                <select>
                  <option>
                    Select
                  </option>
                </select>
                </div>

                <div>
                <p>Expected date of travel</p>
               <input type="date"/>
                </div>
                
              </div>

            </div>
            <div className="input-fields">
              <button>ENQUIRE</button>
              <p>You won't be charged yet</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewSinglePackage;
