import React, { useEffect, useState } from "react";
import Context from "./Context";
import data from "./People";
import axios from "axios";

const ContextProvider = ({ children }) => {
  const [word, setWord] = useState("hello world");
  const [allData, setAllData] = useState([]);
  const [select, setSelect] = useState("");
  const [newData, setNewData] = useState({
    fname: "",
    lname: "",
    email: "",
    contact: "",
    age: "",
    activityType: "",
    description: "",
    duration: "",
    date: "",
  });

  //fetching all activities
  useEffect(() => {
    axios.get("http://localhost:5000/api/todos").then((res) => {
      // console.log(res.data)
      setAllData(res.data);
    });
  }, []);

  //posting activity


  // console.log(allData[1])

  //*******Activity selection*********************//
  // console.log(select)
  const handleSelectChange = (e) => {
    setSelect(e.target.value);
  };

  //******Adding card from the form************//

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    let newFormData = { ...newData };
    newFormData[name] = value;
    // setNewUser({ ...newData, [name]: value });
    setNewData(newFormData);
  };
  //Test: to see data has been populated into newData from addForm
  //    console.log(newData)

  const clickFormHandler = (e) => {
    e.preventDefault();
    const newDataSelect = {
      ...newData,
      activityType: select,
    };
    // setAllData([...allData, newDataWithId]);

    //@Posting data
    axios.post("http://localhost:5000/api/todos/",newDataSelect)
    .then((res)=>{
        console.log(res)
    })
    PostActivity(newDataSelect)
    setNewData({
      fname: " ",
      lname: " ",
      email: " ",
      contact: "",
      age: "",
      activityType: "",
      description: " ",
      duration: "",
      date: "",
    });
  };

  return (
    <>
      <Context.Provider
        value={{
          word,
          allData,
          newData,
          select,
          handleFormChange,
          handleSelectChange,
          clickFormHandler,
        }}
      >
        {children}
      </Context.Provider>
    </>
  );
};

export default ContextProvider;
