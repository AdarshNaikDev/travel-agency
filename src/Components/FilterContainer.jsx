import React from 'react'
import './FilterContainer.css'
import { FaFilter } from "react-icons/fa";

function FilterContainer() {
    let regions = ["Indian Package", "Asian Package", "Australia & Newzealand Package", "Europe Package", "African Package"]
    return (
        <>
            <div className='outerr-container'>
                <div className='filterr'>
                    <FaFilter size={25} />
                    <span style={{ fontSize: "24px", fontWeight: "bold" }}>FILTERS</span>
                </div>
                <div className='country-btnn'>
                    {regions?.map((item, index) => {
                        return (
                            <button key={index} className='filterr-btn'>
                               {item}
                            </button>
                        )
                    })}

                </div>
            </div>
        </>
    )
}

export default FilterContainer