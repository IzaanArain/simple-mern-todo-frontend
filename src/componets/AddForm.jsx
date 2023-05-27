import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import { useContext } from "react";
import context from "../ContextProvider/Context";

function AddForm() {
  const {
    newData,
    select,
    handleSelectChange,
    handleFormChange,
    clickFormHandler
  } = useContext(context);
  return (
    <div className="card mb-4" id="form_card">
      <div className="card-body">
        <h1 className="card-title">Form</h1>

        <Form onSubmit={clickFormHandler}>
          <div className="row">
            <div className="col-lg-6">
              <Form.Group className="mb-3 fs-4">
                <Form.Label htmlFor="fname">first Name :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter first Name"
                  name="fname"
                  id="fname"
                  value={newData.fname}
                  onChange={handleFormChange}
                  required
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
                  value={newData.lname}
                  onChange={handleFormChange}
                  required
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
                  value={newData.age}
                  onChange={handleFormChange}
                  min="18" 
                  max="60"
                  required
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
                  value={newData.email}
                  onChange={handleFormChange}
                  required
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
                  value={newData.date}
                  onChange={handleFormChange}
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
                  value={newData.duration}
                  onChange={handleFormChange}
                  required
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
                  value={newData.contact}
                  onChange={handleFormChange}
                />
              </Form.Group>
            </div>
            <div className="col-lg-6">
              <Form.Group className="mb-3 fs-4">
                <Form.Label htmlFor="activity">Activity Type :</Form.Label>

                <Form.Select
                  aria-label="Default select example"
                  name="activity"
                  id="activity"
                  value={select}
                  onChange={handleSelectChange}
                  required
                >
                  <option disabled>
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
                  value={newData.description}
                  onChange={handleFormChange}
                  maxLength="100"
                />
              </Form.Group>
            </div>
          </div>

          <Button variant="primary" type="submit">
            Submit
          </Button>

          {/* <div className="row">
            <div className="col">
              <Form.Group className="mb-3 fs-4">
                <Form.Label htmlFor="search">Search :</Form.Label>
                <Form.Control
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Enter first Name"
                //   value={searchTerm}
                //   onChange={handleSearchTermChange}
                />
              </Form.Group>
            </div>
          </div> */}
        </Form>
      </div>
    </div>
  );
}

export default AddForm;
