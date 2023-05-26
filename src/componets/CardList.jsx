import React from 'react'
import { useContext,Fragment } from 'react'
import CardData from './CardData'
import Context from '../ContextProvider/Context'


const CardList = () => {
const {word,allData}=useContext(Context)
// console.log(allData)
  return (
    <>
    <h1>Card List</h1>
    <h1>{word}</h1>
    {
    allData.map((value)=>{
        return(
            <>
            <Fragment key={value.id}>
            <h1>{value.fname} {value.lname}</h1>
            </Fragment>
            </>
        )
    })
    }
    </>
  )
}

export default CardList