import CardList from "./componets/CardList"
import Context from "./ContextProvider/Context"
import { useContext,useState } from "react"
function App() {
  const [ShowTable, setShowTable] = useState(false);
  const [ShowCard, setShowCard] = useState(false);
//******Showing hiding table or cards************//

const handleShowTable = () => {
  setShowTable(!ShowTable);
};
const handleShowCard = () => {
  setShowCard(!ShowCard);
};
  return (
    <>
    <div className="container">
    <div className="row">
          <div className="col-lg">
            <div className="card m-4">
              <div className="card-body">
                <button
                  className="btn btn-primary fs-4 mb-2"
                  onClick={() => handleShowCard()}
                >
                  see cards
                </button> 
                 {ShowCard ? <CardList/> : null}
              </div>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default App
