import React from "react";
import Button from "react-bootstrap/Button";
import EditForm from "./EditForm";
import { useContext } from "react";
import Context from "../ContextProvider/Context";
function EditButton({data}) {
    const { handeleEditclick}=useContext(Context)
    const [modalShow, setModalShow] = React.useState(false);
    return (
      <>
        <Button
          variant="primary"
          style={{ width: "100%" }}
          onClick={(e) => {
            setModalShow(true)
            handeleEditclick(e,data)
          }}
        >
          Edit
        </Button>
  
        {/* <button className="btn btn-primary text-light " style={{width:"50%"}}>Edit</button> */}
  
        <EditForm
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }
  
  export default EditButton;