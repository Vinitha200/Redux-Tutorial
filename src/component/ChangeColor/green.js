import React from "react";
import {green} from "../../redux/store/action/commonAction"
import { useDispatch } from 'react-redux';

const Green =()=>{

    const dispatch = useDispatch()

    const greenColor=()=>{
        dispatch(green('green_file'))
    }
return(
    <div>
        <button onClick={greenColor}>Green Component</button>
    </div>
)
}

export default Green;