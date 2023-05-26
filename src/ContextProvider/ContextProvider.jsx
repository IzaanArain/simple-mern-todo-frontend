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
  const [newEditData, setNewEditData] = useState({
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

  //******Updating card from the form************//
 //Three steps

 // 1) onChange handler for the EditForm // 20-05-2023 08:00 pm : No errors yet from this code yet
const handleEditFormChange=(e)=>{
    e.preventDefault()
    const { name, value } = e.target;
    let newEditFormData = { ...newEditData };
    newEditFormData[name] = value;
    setNewEditData(newEditFormData)
  }
  //Test: data is successfully populating
// console.log(newEditData)

 // 2) onClick handler for the Edit button 
  const handeleEditclick=(e,editData)=>{
    e.preventDefault()
  
    const formValues={
      _id:editData._id,
      fname: editData.fname,
      lname: editData.lname,
      email: editData.email,
      contact: editData.contact,
      age: editData.age,
      activityType: editData.activityType,
      description: editData.description,
      duration: editData.duration,
      date: editData.date,
    }
    setNewEditData(formValues)
   }
//    console.log(newEditData)
   // 3) onSubmit handler for the editForm
const handleEditFormSubmit=(e)=>{
    e.preventDefault()
    // const editedFormValue={
    //   fname: newEditData.fname,
    //   lname: newEditData.lname,
    //   email: newEditData.email,
    //   contact: newEditData.contact,
    //   age: newEditData.age,
    //   activityType: newEditData.activityType,
    //   description: newEditData.description,
    //   duration: newEditData.duration,
    //   date: newEditData.date,
    // }
    // console.log(editedFormValue)

    // const newValues=[...allData]
    // const index=allData.findIndex((value)=>value.id===newEditData.id)
    // newValues[index]=editedFormValue;
    // setAllData(newValues)
    axios.put(`http://localhost:5000/api/todos/${newEditData._id}`,newEditData)
    .then((res)=>{
        console.log(res)
    })
    }
    //******deleting card from the form************//
  const deleteFunc = (id) => {
    // console.log(id)
    axios.delete(`http://localhost:5000/api/todos/${id}`)
    .then((res)=>{
        console.log(res)
    })
    // setAllData((prevUsers) => prevUsers.filter((user) => user.id !== id));

  };
  return (
    <>
      <Context.Provider
        value={{
          word,
          allData,
          newData,
          select,
          newEditData,
          handleEditFormSubmit,
          handleFormChange,
          handleSelectChange,
          clickFormHandler,
          handleEditFormChange,
          handeleEditclick,
          deleteFunc
        }}
      >
        {children}
      </Context.Provider>
    </>
  );
};

export default ContextProvider;
