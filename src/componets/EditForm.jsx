import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";
import Form from "react-bootstrap/Form";
import { useContext } from "react";
import Context from "../ContextProvider/Context";

function EditForm(props) {
  const {handleEditFormChange
    ,newEditData,
    handleEditFormSubmit
    }=useContext(Context)
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h2>Edit Form :</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{backgroundColor:"azure"}}>
        <Form onSubmit={handleEditFormSubmit}>
          <div className="row">
          <hr />
            <div className="col-lg-6">
              <Form.Group className="mb-3 fs-4">
                <Form.Label htmlFor="fname">first Name :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter first Name"
                  name="fname"
                  id="fname"
                  autoComplete="off"
                  value={newEditData.fname}
                  onChange={handleEditFormChange}
                />
              </Form.Group>
            </div>
            <div className="col-lg-6">
              <Form.Group className="mb-3 fs-4">
                <Form.Label htmlFor="lname">last Name :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter last Name"
                  name="lname"
                  id="lname"
                  value={newEditData.lname}
                  onChange={handleEditFormChange}
                />
              </Form.Group>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <Form.Group className="mb-3 fs-4">
                <Form.Label htmlFor="age">Age :</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter your Age"
                  name="age"
                  id="age"
                  autoComplete="off"
                  value={newEditData.age}
                  onChange={handleEditFormChange}
                  min="18" 
                  max="60"
                />
              </Form.Group>
            </div>
            <div className="col-lg-6">
              <Form.Group className="mb-3 fs-4">
                <Form.Label htmlFor="email">Email :</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  id="email"
                  value={newEditData.email}
                  onChange={handleEditFormChange}
                />
              </Form.Group>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <Form.Group className="mb-3 fs-4">
                <Form.Label htmlFor="date">Date :</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Date"
                  name="date"
                  id="date"
                  autoComplete="off"
                  value={newEditData.date}
                  onChange={handleEditFormChange}
                  required
                  min="2023-01-02"
                  max="2023-07-02"
                />
              </Form.Group>
            </div>
            <div className="col-lg-6">
              <Form.Group className="mb-3 fs-4">
                <Form.Label htmlFor="duration">duration :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Duration"
                  name="duration"
                  id="duration"
                  autoComplete="off"
                  value={newEditData.duration}
                  onChange={handleEditFormChange}
                />
              </Form.Group>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <Form.Group className="mb-3 fs-4">
                <Form.Label htmlFor="contact">Contact :</Form.Label>
                <Form.Control
                  type="tel"
                  pattern="03[0-9]{2}-(?!1234567)(?!1111111)(?!7654321)[0-9]{7}"
                  placeholder="03XX-XXXXXXX"
                  name="contact"
                  id="contact"
                  autoComplete="off"
                  value={newEditData.contact}
                  onChange={handleEditFormChange}
                />
              </Form.Group>
            </div>
            <div className="col-lg-6">
              <Form.Group className="mb-3 fs-4">
                <Form.Label htmlFor="activity">Activity Type :</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  name="activityType"
                  id="activity"
                  value={newEditData.activity}
                  onChange={handleEditFormChange}
                >
                  <option disabled hidden>
                    Open this select menu
                  </option>
                  <option value="Bicycles">Bicycle</option>
                  <option value="Swimming">Swimming</option>
                  <option value="Boxing">Boxing</option>
                  <option value="Running">Running</option>
                  <option value="Weight Lifting">Weight Lifting</option>
                </Form.Select>
              </Form.Group>
            </div>
          </div>

          <div className="row">
            <div className="col-lg">
              <Form.Group className="mb-3 fs-4">
                <Form.Label htmlFor="description">Description :</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="description"
                  id="description"
                  value={newEditData.description}
                  onChange={handleEditFormChange}
                  maxLength="100"
                />
              </Form.Group>
            </div>
          </div>

          <Button variant="primary" type="submit" onClick={props.onHide}>
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default EditForm;
// function EditButton({data}) {
//   const { handeleEditclick}=useContext(context)
//   const [modalShow, setModalShow] = React.useState(false);
//   return (
//     <>
//       <Button
//         variant="primary"
//         style={{ width: "100%" }}
//         onClick={(e) => {
//           setModalShow(true)
//           handeleEditclick(e,data)
//         }}
//       >
//         Edit
//       </Button>

//       {/* <button className="btn btn-primary text-light " style={{width:"50%"}}>Edit</button> */}

//       <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//     </>
//   );
// }

// export default EditButton;
