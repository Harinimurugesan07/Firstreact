// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// const Student_details = () => {
//   const [user,setuser]=useState("")

//   const data=async()=>{
//   const res=await axios.get("http://127.0.0.1:8000/students")
//   console.log(res)
// }


 

//   return (
//     <div>
//       helo
//     </div>
//   )
// }

// export default Student_details



// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const Student_details = () => {

//   const [user, setUser] = useState([]);

//   const getData = async () => {

//     try {

//       const res = await axios.get(
//         "http://127.0.0.1:8000/students"
//       );

//       console.log(res.data.students)

//       setUser(res.data.students);

//     } 
//     catch (err) {

//       console.log("Error:", err);

//     }
//   };

//   useEffect(() => {

//     getData();

//   }, []);

//   return (
//     <div>

//       <h1>Student Details</h1>

//       {
//         user.map((item,i)=>(
//           <p>{item[1]}</p>
//         ))
//       }

//     </div>
//   );
// };

// export default Student_details;

import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Student_details = () => {

  const [user, setuser] = useState([])

  const getData = async () => {

    try {

      const res = await axios.get(
        "http://127.0.0.1:8000/students"
      );

      console.log(res.data.students)

      setuser(res.data.students);

    } 
    catch (err) {

      console.log("Error:", err);

    }
  };

  useEffect(() => {
    getData()
  }, [])
console.log(user)

  return (

    <div>

      <h1>Student Details</h1>

      <table border="1">

        <thead>

          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Course</th>
          </tr>

        </thead>

        <tbody>

          {
            user.map((item, i) => (

              <tr key={i}>

                <td>{item[0]}</td>
                <td>{item[1]}</td>
                <td>{item[2]}</td>
                <td>{item[3]}</td>
                <td>{item[4]}</td>

              </tr>

            ))
          }

        </tbody>

      </table>

    </div>

  )
}

export default Student_details