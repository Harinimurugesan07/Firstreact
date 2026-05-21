import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Secpg = () => {
    const[secd,setsecd]=useState([])
    const data=async()=>{
        const res = await axios.get("https://dragonball-api.com/api/characters")
        console.log(res.data.items)
    }
    useEffect(()=>{
        data()
    },[])
  return (
    <div>
      <h1>hello</h1>
    </div>
  )
}

export default Secpg
