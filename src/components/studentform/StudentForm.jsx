import React, { useEffect, useState } from "react";
import "../studentform/studentform.css";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const StudentForm = () => {


const navi=useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    course: "",
  });
  
  useEffect(() => {
  const savedData = localStorage.getItem("studentData");

  if (savedData) {
    setFormData(JSON.parse(savedData));
  }
}, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Save object → string
//     localStorage.setItem(
//       "studentData",
//       JSON.stringify(formData)
//     );

//     // Get back and show in console
//     const localdata1 = localStorage.getItem("studentData");
//     const datastore = JSON.parse(localdata1);

//     alert("Saved successfully!");

//     console.log(datastore);
//     console.log(datastore.name);
//     console.log(datastore.email);
//   };


//   const response = await fetch(
//     "http://127.0.0.1:8000/submit",
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     }
    
    
//   );


//   const data = await response.json();

//   alert(data.message);
//   console.log(data)
// };


const handleSubmit = async (e) => {
  e.preventDefault();

  try {

    const res = await axios.post(
      "http://127.0.0.1:8000/submit",
      formData
    );

    console.log(res.data);

    navi("/data")
    alert(res.data.message);

  } 
  catch (err) {
    console.log("error message", err);
  }
};

 
 const handleClear = () => {
  localStorage.removeItem("studentData");

  setFormData({
    name: "",
    email: "",
    age: "",
    course: "",
  });

  alert("Data cleared!");
};

  return (
    <div className="container">
      <div className="form-card">
        <h1>Student Registration</h1>
        <p>Fill your details below</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />

        <input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
        />
        <input
        type="number"
        name="age"
        placeholder="Enter your age"
        value={formData.age}
        onChange={handleChange}
        />

            <input
        type="text"
        name="course"
        placeholder="Enter your course"
        value={formData.course}
        onChange={handleChange}
        />

          <button type="submit">Submit</button>

          <button
            type="button"
            onClick={handleClear}
          >
            Clear Data
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentForm;