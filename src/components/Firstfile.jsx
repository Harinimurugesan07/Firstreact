import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Firstfile = () => {
    const[dragon,setdragon]=useState([])

    const data=async()=>{
        const res=await axios.get("https://dragonball-api.com/api/characters")
        console.log(res.data.items)
        setdragon(res.data.items)

    }
    useEffect(()=>{
        data()
    })

 
  
  return (
    <div>

      skjahdkjhask

 {
    dragon.map((items,i)=>(
        <p>{i+1} . {items.name}</p>
    ))
 }
    </div>
  )
}

export default Firstfile
