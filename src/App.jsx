import CardList from "./componets/CardList"
import Context from "./ContextProvider/Context"
import { useContext,useState } from "react"
import NavBar from "./componets/NavBar";
import Footer from "./componets/Footer";
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
    <NavBar/>
    <div className="container-fluid">
    <div className="row">
          <div className="col-lg">
           
              {/* <div>
                <button
                  className="btn btn-primary fs-4 mb-2"
                  onClick={() => handleShowCard()}
                >
                  see cards
                </button> 
                 {ShowCard ? <CardList/> : null}
                 
              </div> */}
           <CardList/>
          </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default App
