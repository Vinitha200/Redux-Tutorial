import React from "react";
import {useSelector } from "react-redux";

const Result =()=>{

    
    const result = useSelector((state)=>state.commonReducer.result)
    const backgroundColor = useSelector((state)=>state.commonReducer.background)
    const TextbackgroundColor = useSelector((state)=>state.commonReducer.textColor)
    return (
        <> 
        <div>

        
        {/* increment decrement redux result */}
        <div>
            <span>
             Result:{result}
            </span>
        </div>
      
      {/* color change redux */}
      <div
       style={
        {
            display:"flex",
            justifyContent:"center"
        }
       }>
         <div 
       style={{
        border:"1px solid black",
        height:"200px",
        width:"200px",
       backgroundColor:`${backgroundColor}`
       }}
       >
      {TextbackgroundColor}
       </div>
      </div>
      
      </div>
        </>
       
    )
}

export default Result;