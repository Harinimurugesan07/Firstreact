import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './dragdata.css'
const Dragdata = () => {
    const[drag,setdrag]=useState([])

    const data = async()=>{
       const res= await axios.get("https://dragonball-api.com/api/characters")
       console.log(res.data.items)
       setdrag(res.data.items)
    }
    // useEffect(()=>{
    //     data()
    // })
    useEffect(()=>{
data()
    },[])
  return (

    <div>
      <h1>Details</h1>
      <table className="tab" border="1">
        <thead>
            <tr>
        <th>ID</th>
      <th>Name</th>
      <th>KI</th>
      <th>Gender</th>
      <th>Race</th>
      <th>Profile</th>
            </tr>
        </thead>
        <tbody>
            {
            drag.map((items) => (
                <tr key={items}>
                    <td>{items.id}</td>
                    <td>{items.name}</td>
                <td>{items.ki}</td>
                <td>{items.gender}</td>
                <td>{items.race}</td>
                <td><img style={{height:"70px",width:"40px"}} src={items.image}/></td>
                </tr>
            ))
        }
        </tbody>
      </table>
      {/* {
        drag.map((items,id)=>(
            // <p>{items.id}</p>
            <p>{id+1}.{items.name}</p>

        ))
      } */}
    </div>
  )
}

export default Dragdata
