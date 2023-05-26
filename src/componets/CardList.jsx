import React from 'react'
import { useContext,Fragment } from 'react'
import CardData from './CardData'
import Context from '../ContextProvider/Context'
import AddForm from './AddForm'

const CardList = () => {
const {word,allData}=useContext(Context)
// console.log(allData)
  return (
    <>
    {/* <h1>Card List</h1> */}
    {/* <h1>{word}</h1> */}
    <div className="row d-flex justify-content-center mt-5">
        <div className="col-lg-6">
        <AddForm/>
        </div>
      </div>
   <div className="row">
    <div className="col">
        <div id="card_list">
        {allData.map((value)=>{
        return(
            <>
            <Fragment key={value.id}>
                <CardData data={value}/>
            {/* <h1>{value.fname} {value.lname}</h1> */}
            </Fragment>
            </>
        );
    })};
        </div>
    </div>
   </div>
    </>
  )
}

export default CardList