import React, { useContext } from "react";
import store from "../Store/Store";
import { NavLink, useNavigate } from "react-router-dom";

function StudentCompo(){
   const[ContextData]= useContext(store)
   const Navigate=useNavigate()
    return(
        <>
        
        <button  className="addstu" onClick={()=>Navigate('/addstudent')}>Add Student</button>
        <h1 className="studtl">Student Details</h1>
        <table border={2} className="table">
       
            <thead>
                <tr className="fontt">
                    <th>Name</th>
                    <th>Age</th>
                    <th>Course</th>
                    <th>Batch</th>
                    <th>Change</th>
                </tr>
            </thead>
            <tbody >
                {ContextData.map((item,index)=>{
                    return(
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.course}</td>
                        <td>{item.batch}</td>
                        <td><NavLink to='/editstudent' state={{index}} >Edit</NavLink></td>
                    </tr>
                    )
                })}




            </tbody>
        </table>
        </>
    )
}
export default StudentCompo;