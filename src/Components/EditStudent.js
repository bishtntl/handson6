import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import store from "../Store/Store";
  

function EditStudentCompo(){
    const Navi=useNavigate()
    const locationdata=useLocation().state.index;
    console.log(locationdata)
    const ContextData= useContext(store)
    console.log(ContextData)
    

    const update={
        name:ContextData.data[locationdata].name,
        age:ContextData.data[locationdata].age,
        course:ContextData.data[locationdata].course,
        batch:ContextData.data[locationdata].batch
    }
 console.log(ContextData)
    function changehandler(e){
        update[e.target.name]=e.target.value;
    }

   function changeme(e){
        e.preventDefault()
       ContextData.data[locationdata]=update;

      Navi('/student')

    }

    return(
        
        <>


        <form >
        <label htmlFor="name"  className="nameone" >Name</label>
        <input type="text" id="name" name="name"  placeholder={ContextData.data[locationdata].name} onChange={changehandler}></input><br/>
        <label htmlFor="age"   className="nametwo">Age</label>
        <input type="number" id="age" name="age"  placeholder={ContextData.data[locationdata].age} onChange={changehandler}></input><br/>
        <label htmlFor="course"  className="namethree">Course</label>
        <input type="text" id="course" name="course"  placeholder={ContextData.data[locationdata].course} onChange={changehandler}></input><br/>
        <label htmlFor="batch"  className="namefour">Batch</label>
        <input type="text" id="batch" name="batch"  placeholder={ContextData.data[locationdata].batch} onChange={changehandler}></input><br/>
         
         <button onClick={changeme} className="btnone">Update</button>
        <button onClick={()=>Navi(-1)} className="btntwo" >Cancel</button>
        </form>
        

       
        </>
        
    )
}
export default EditStudentCompo;