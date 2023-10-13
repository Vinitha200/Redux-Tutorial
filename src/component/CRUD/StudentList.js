import React, { useEffect } from "react";
import "./style.css";
import { useSelector,useDispatch } from "react-redux";
import List from "./List"

const StudentList =()=>{

    const initialData = useSelector((state)=>state.commonReducer.studentList)
    return(
        <>
        <div>
         <table>
            <thead>
                <tr>
                    <th>Student</th>
                    <th>Collage</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {initialData.map((userData)=>((
                <List user={userData} key={userData.id}></List>
            )))}
            </tbody>
        </table>
        </div>
        
        </>
    )
}

export default StudentList;