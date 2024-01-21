import React,{useState} from "react";
import LoginHeader from "../Components/LoginHeader";
import './AddPackage.css'

const AddPackage = () => {

    const[pkgImageFiles, setPkgImageFiles] = useState([]);
    const ImageArr = ['/imageIcon2.png','/imageIcon2.png','/imageIcon2.png','/imageIcon2.png'];
    const [imagePreview, setImagePreview] = useState(ImageArr); 

    
    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (pkgImageFiles.length < 4) {
            setPkgImageFiles((prevImage) => [...prevImage, file]);

            const newImagePreview = [...imagePreview];
            console.log("pkgImage length ===>", pkgImageFiles.length)
            newImagePreview[pkgImageFiles.length] = URL.createObjectURL(file);
            setImagePreview(newImagePreview);
        } else {
            console.log("Cannot upload more than 4 images");
        }
        
    };
   

    return (
        <>
            <LoginHeader backButton={true} fromAdmin={true} />

            <div className="small-heading">
                <h4>
                    Let's check everything before publishing
                </h4>
                <p>
                    Please make sure all the information is correct & start selling your product
                </p>
            </div>

            {/* form box starts */}
            <div className="form-travel-pkg">
                <h4 className="small-header fw-bold" >Travel package information</h4>
                <div className="col-divide">
                    {/* first column */}
                    <div className="col-divide-left">
                        {/* package title */}
                        <div className="pkg-title">
                            <label>Package title</label>
                            <input type="text" />
                        </div>

                        {/* Base price */}
                        <div className="pkg-title">
                            <label>Base Price</label>
                            <input type="text" />
                        </div>

                        {/* No of days */}
                        <div className="pkg-title">
                            <label>Number of days</label>
                            <input type="text" />
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
                            <input type="text" />
                        </div>

                        {/* Number of nights */}
                        <div className="pkg-title">
                            <label>
                                Number of nights
                            </label>
                            <input type="text" />
                        </div>

                    </div>
                </div>

                {/* Tour overview */}
                <div className="tour-over">
                    <label>
                        Tour Overview
                    </label>
                    <textarea style={{ resize: 'none' }} type="text" />
                </div>
            </div>
            <div className="next-btn">
                <button>
                    Next
                </button>
            </div>
            {/* form box ends */}

            {/* image upload box starts */}
            <div className="form-travel-pkg">
                <div className="media-text">
                    <h4 className="small-header fw-bold" >Media</h4><span className="small-txt">(PNG, Jpeg, JPG, Tiff) please upload 4 best images about this package</span>
                </div>

                {/* div should contain 5 boxes */}
                <div className="img-cardd">
                    {imagePreview.map((src,index)=>{
                        return (
                        <img key={index} className="img-preview" src={src} alt={`Image ${index + 1}`}/>
                        )
                    })}
                    
                   
                    
                    <div className="file-upload-container">
                        <input onChange={handleFileChange} className="file-upload" type="file" id="fileInput" />
                        <label htmlFor="fileInput" className="file-upload-label">
                            +
                        </label>
                    </div>
                </div>

            </div>

            {/* last section shows message box based on days */}
            <div className="form-travel-pkg">
                <h4 className="small-header fw-bold" >Day by day schedule</h4>
               

                {/* Tour overview */}
                <div className="tour-over">
                    <label>
                        Day 1
                    </label>
                    <textarea style={{ resize: 'none', marginTop:'20px', borderRadius:'10px', height:'120px',border:'4px darkgray solid' }} type="text" />
                </div>

                
            </div>

            <div className="next-btn">
                <button >
                    Submit
                </button>
            </div>
        </>
    )
}

export default AddPackage