import axios from 'axios'
import React, { useEffect } from 'react'

const Dragon = () => {
   const data=async()=>{
     const res = await axios.get("https://dragonball-api.com/api/characters")
     console.log(res.data.items)
   }
   useEffect(()=>{
    data()
   })

  return (
    <div>
      hhh
    </div>
  )
}

export default Dragon
