import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { deletestudent } from "../../redux/store/action/commonAction"

const List = ({ user }) => {
    const { id, student, collage } = user

    const dispatch = useDispatch()
  
    return (
        <>


            <tr>
                <td>{student}</td>
                <td>{collage}</td>
                <td><button onClick={()=>dispatch(deletestudent(id))}>Delete</button></td>
            </tr>


        </>
    )
}

export default List;