import React, { useEffect, useState } from "react";
import Context from "./Context";
import data from "./People";
import axios from "axios";

const ContextProvider = ({ children }) => {
  const [word, setWord] = useState("hello world");
  const [allData, setAllData] = useState([]);
  const [ShowTable, setShowTable] = useState(false);
  const [ShowCard, setShowCard] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5000/api/todos").then((res) => {
      // console.log(res.data)
      setAllData(res.data);
    });
  }, []);
  // console.log(allData[1])

  //******Showing hiding table or cards************//

  const handleShowTable = () => {
    setShowTable(!ShowTable);
  };
  const handleShowCard = () => {
    setShowCard(!ShowCard);
  };
  return (
    <>
      <Context.Provider value={{ word, 
        allData,
        ShowCard,
         handleShowCard,}}>{children}</Context.Provider>
    </>
  );
};

export default ContextProvider;
