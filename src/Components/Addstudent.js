import React, { useContext } from "react";
import store from "../Store/Store";
import { useNavigate } from "react-router-dom";


function AddStudentCompo(){

    const AddStuData=useContext(store)
       const Navigate =useNavigate()


     const AddObj={
        name:'',
        age:'',
        course:'',
        batch:''
     }
     
     function changeme(e){
         AddObj[e.target.name]=e.target.value
     }

     function handle(){
        AddStuData.data.push(AddObj)
        Navigate('/student')
     }
 



    return(
        <>
       
       <label htmlFor="name"  className="nameone">Name</label>
       <input type="text" id="name" name="name" placeholder="Enter Your Name" onChange={changeme}/><br/>

       <label htmlFor="age"  className="nametwo">Age</label>
       <input type="number" id="age" name="age" placeholder="Enter Your Age" onChange={changeme}/><br/>

       <label htmlFor="course"  className="namethree">Course</label>
       <input id="course" name="course" placeholder="Enter course Name" onChange={changeme} /><br/>

       <label htmlFor="batch"  className="namefour">Batch</label>
       <input id="batch" name="batch" placeholder="Enter Batch Name" onChange={changeme}/><br/>



       <button className="btnthree" onClick={()=>Navigate('/student')}>Cancel</button>
       <button className="btnfour" onClick={handle}>Submit</button>



        </>
    )
}
export default AddStudentCompo;