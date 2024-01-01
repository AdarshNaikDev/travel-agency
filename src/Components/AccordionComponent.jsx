import React,{useState,useEffect} from 'react'

function AccordionComponent({dayData, dayContent, ind}) {

  
  const [ showAccordion, setShowAccordion]= useState(false);


  function accordionHandler(){
  
    setShowAccordion(!showAccordion);
  }

  useEffect(()=>{
   
    if(ind==1)
    {
      setShowAccordion(true);
    }
  },[])
  return (
    <div className="accordion mb-2" onClick={()=>accordionHandler()} >
    <div className="accordion-item">
      <h2 className="accordion-header" >
        <button className= {showAccordion? "accordion-button":"accordion-button collapsed"} type="button" >
          {dayData}
        </button>
      </h2>
      {/* accordion-collapse collapse show */}
      {/* accordion-button collapsed */}
      <div  className={showAccordion? "accordion-collapse collapse show":"accordion-collapse collapse"}>
        <div className="accordion-body">
          <strong>{dayData}</strong> {dayContent}
        </div>
      </div>
    </div>
   
  </div>
  )
}

export default AccordionComponent