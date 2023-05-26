import React from 'react'
import { useContext } from 'react'
import Context from '../ContextProvider/Context'
const CardList = () => {
const {word,allData}=useContext(Context)
console.log(allData)
  return (
    <>
    <h1>Card List</h1>
    <h1>{word}</h1>
    {
    allData.map((value)=>{
        return(
            <>
            <h1>{value.fname}</h1>
            </>
        )
    })
    }
    </>
  )
}

export default CardList