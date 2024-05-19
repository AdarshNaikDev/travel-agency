import React, {useEffect, useState} from "react";
import LoginHeader from "../Components/LoginHeader";
import { FaStar } from "react-icons/fa";
import AccordionComponent from "../Components/AccordionComponent";
import "./ViewSinglePackage.css";
import {useLocation} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import UseFetchData from "../Hooks/UseFetchData";
import { add } from "../Store/travelPkgsSlice";

function ViewSinglePackage() {
  let singlePkg = new Array();
  const allTravelPkgs = useSelector((state) => state.travelPkgs);
  const [singlePackageData, setSinglePackageData] = useState(null);
  const [bgImagesArr, setBgImages] = useState(null);
 const location = useLocation();
 const pkgId = location?.state?.packageId;


 const {items,loading,error}= UseFetchData("TourPackage/g/getPackages")
  const dispatch = useDispatch();
  
  
  useEffect(() => {
  console.log("ITems", items)
    if(items.length > 0)
    {
      items.forEach((item)=>{
      dispatch(add(item))
      })
    }
    else{
      console.log("control has reached here")
    }
  }, [items]);

 function getPkgOnId(pkgId, allTravelPkgs) {
  return allTravelPkgs.find((item) => item._id === pkgId);
}

 
 useEffect(()=>{
  //console.log(pkgId);
  //console.log(allTravelPkgs);
if(pkgId && allTravelPkgs )
{
  singlePkg = getPkgOnId(pkgId,allTravelPkgs);
  console.log("Single package image",singlePkg)
  
  setSinglePackageData(singlePkg)
}
 
 },[pkgId, allTravelPkgs])





  const iterationData = [
    {
      "dayNumber": "Day1",
      "Iteration": "Explore the city's landmarks and museums.",
      "ID":1
    },
    {
      "dayNumber": "Day2",
      "Iteration": "Visit local markets and try traditional cuisine.",
      "ID":2
    },
    {
      "dayNumber": "Day3",
      "Iteration": "Enjoy outdoor activities like hiking and sightseeing.",
      "ID":3
    },
    {
      "dayNumber": "Day4",
      "Iteration": "Relax and unwind at a nearby beach or spa.",
      "ID":4
    }
  ]

  return (
    <>
      <LoginHeader backButton={true} />

      <div className="ms-5 mt-4 ">
        <h3 className="mt-2 ms-5">{singlePackageData && singlePackageData.title}</h3>
        <div className="d-flex ms-5 ps-2">
          <FaStar color="#7BD3EA" size={25} />
          <p className="ms-2 text-muted">South India</p>
        </div>
      </div>

      {/* 4 image collage starts */}
      <div className="image-parent">
        <div >
      <img className="image-adjuster" src={singlePackageData && singlePackageData?.pkgImages[0]?.img1} />
        </div>
        <div >
        <img className="image-adjuster" src={singlePackageData && singlePackageData?.pkgImages[1]?.img2} />
      
        </div>
        <div >
        <img className="image-adjuster" src={singlePackageData && singlePackageData?.pkgImages[2]?.img3} />
      
        </div>
        <div >
        <img className="image-adjuster" src={singlePackageData && singlePackageData?.pkgImages[3]?.img4} />
      
        </div>
      </div>

      {/* grid Component which contains form description and accordion*/}
      <div className="grid-comp">
        <div className="grid-comp-left">
          {/* Description area starts */}
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
          {/* Description area ends */}
          {/* Accordion area starts */}

          {
            iterationData.map((item, ind) => {

              return (
                
                  <AccordionComponent key={ind} dayData={item.dayNumber} dayContent={item.Iteration} ind = {item.ID}/>
               
              )
            })
          }





          {/* Accordion area ends */}
        </div>

        {/* Grid right side form-area starts */}
        <div className="form-cont" >
          <div className="form-card">
            <h5 className="ms-5 pt-4">Starting from just ₹3799/- only</h5>

            <div className="input-fields">
              <div className="field-fullName">
                <p className="text-muted fw-bold">Full Name</p>
                <input placeholder="Your Name" style={{ overflow: 'none', borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderBottom: '3px solid rgb(180, 180, 180)', width: '318px' }} />
              </div>

              <div className="email-phone d-flex ms-4 mt-4">
                <div className="field-email">
                  <p className="text-muted fw-bold">Email address</p>
                  <input placeholder="Your Email address" style={{ width: '150px', overflow: 'none', borderTop: 'none', borderRight: 'none', borderLeft: 'none', borderBottom: '3px solid rgb(180, 180, 180)', width: '140px' }} />
                </div>
                <div className="field-phone">
                  <p className="text-muted fw-bold">Phone Number</p>
                  <input placeholder="Your Phone number" style={{ width: '150px', overflow: 'none', borderTop: 'none', borderRight: 'none', borderLeft: 'none', borderBottom: '3px solid rgb(180, 180, 180)' }} />
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
                  <input type="date" />
                </div>

              </div>

            </div>
            <div className="btn-desc">
              <button className="enq-btn fw-bold text-white">ENQUIRE</button>
              <p>You won't be charged yet</p>
            </div>
          </div>
        </div>
        {/* form area ends */}
      </div>
    </>
  );
}

export default ViewSinglePackage;
