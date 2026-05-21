import React from 'react'
import StudentForm from './components/studentform/StudentForm'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Student_details from './components/Student_details/Student_details';
import Dragon from './components/Dragon';
import Firstfile from './components/Firstfile';
import Dragdata from './components/dragdata/Dragdata';
import Secpg from './components/secondpage/Secpg';

const App = () => {
  return (
    // <div>
   
    //   <StudentForm/>
    // </div>

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<StudentForm/>}/>
      <Route path="/data" element={<Student_details/>}/>
      <Route path="/dragon" element={<Dragon/>}/>
      {/* <Route path="/first" element={<Firstfile/>}/> */}
      <Route path="/dragd" element={<Dragdata/>}/>
      <Route path="/secpg" element={<Secpg/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
