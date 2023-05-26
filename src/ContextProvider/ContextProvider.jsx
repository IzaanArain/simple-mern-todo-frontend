import React, { useEffect, useState } from 'react'
import Context from './Context'
import data from './People'
import axios from 'axios'

const ContextProvider = ({children}) => {
    const [word,setWord]=useState("hello world")
    const [allData,setAllData]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:5000/api/todos")
        .then((res)=>{
            // console.log(res.data)
            setAllData(res.data)
        })
    },[])
    // console.log(allData[1])
  return (
    <>
    <Context.Provider value={{word,allData}}>
    {children}
    </Context.Provider>
    </>
  )
}

export default ContextProvider