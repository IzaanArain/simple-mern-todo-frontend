import React, { useEffect, useState } from 'react'
import Context from './Context'
import data from './People'
import axios from 'axios'

const ContextProvider = ({children}) => {
    const [word,setWord]=useState("hello world")
    const [allData,setAllData]=useState(data)

    // useEffect(()=>{
    //     axios.get("http://localhost:5000/api/todos/")
    //     .then(res=>setAllData(res.data))
    // },[])
  return (
    <>
    <Context.Provider value={{word,allData}}>
    {children}
    </Context.Provider>
    </>
  )
}

export default ContextProvider