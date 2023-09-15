import React, { useState } from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import HomeCompo from "../Components/Home";
import StudentCompo from "../Components/Student";
import AboutCompo from "../Components/About";
import EditStudentCompo from "../Components/EditStudent";
import AddStudentCompo from "../Components/Addstudent";
import store from "../Store/Store";
import './style.css'


function RouteCompo(){
    const [data,setdata]=useState([
        {id:1,name:'John',age:26,course:'Mern',batch:'October'},
        {id:2,name:' Doe',age:25,course:'Mern',batch:'November'},
        {id:3,name:'Biden',age:23,course:'Mern',batch:'September'},
        {id:4,name:'Barar',age:22,course:'Mern',batch:'November'},
        {id:5,name:'Christ',age:20,course:'Mern',batch:'October'},
        {id:6,name:'Elent',age:24,course:'Mern',batch:'September'}

    ])
     console.log(data.length)
    return(
       <>
       <BrowserRouter>
       <div className="navbar">
       <NavLink to='/' className='nav' style={({isActive})=>({color:isActive ? 'red':'green'})}>Home</NavLink>
       <NavLink to='/student' className='nav' style={({isActive})=>({color:isActive ? 'red':'green'})}>Student</NavLink>
       <NavLink to='/about' className='nav' style={({isActive})=>({color:isActive ? 'red':'green'})}>About</NavLink>
       </div>

       <Routes>

            <Route path="/" element={<HomeCompo/>}></Route>
            <Route path="/student" element={
           <store.Provider value={[ data, setdata]}>
            <StudentCompo/>
           </store.Provider>
            }></Route>
            <Route path="/about" element={<AboutCompo/>}></Route>
            <Route path="/editstudent" element={
                <store.Provider value={{data,setdata}}>
                    <EditStudentCompo/>
                </store.Provider>
            }></Route>
            <Route path="addstudent" element={
                <store.Provider value={{data,setdata}}>
                    <AddStudentCompo/>
                </store.Provider>
            }></Route>
            
           
       </Routes>
       
       
       
       
       </BrowserRouter>

       </>

    )
}
export default RouteCompo;