import React from "react";
import {red} from "../../redux/store/action/commonAction"
import { useDispatch } from 'react-redux';


const Red =()=>{

    const dispatch = useDispatch()

    const redColor=()=>{
        dispatch(red('red_file'))
    }
return(
    <div style={{marginRight: "7px"}}>
        <button onClick={redColor}>Red Component</button>
    </div>
)
}

export default Red;