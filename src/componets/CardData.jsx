import React from 'react'

const CardData = ({data}) => {
    const {
        fname,
        lname,
        age,
        email,
        contact,
        activityType,
        description,
        duration,
        date,
      } = data;
  return (
    <div className="card mb-4 shadow font-monospace" id="myCard">
    <div className="card-body">
      {/* <h4><span className="text-danger fw-bold">id </span>: {id}</h4> */}
      <h4 className="card-title"><span className="text-danger fw-bold">Acivity type</span> : {activityType}</h4>
      <hr />
      <div className="card-text">
        <div className="row">

          <div className="col-lg-5">
            <ul className="list-group fw-bold">
              <li style={{ color: "red" }} className="list-group-item list-group-item-action">
                Name : {fname} {lname}
              </li>
              <li style={{ color: "purple" }} className="list-group-item list-group-item-action">
                Age : {age}
              </li>
            </ul>
          </div>

          <div className="col-lg-7">
            <ul className="list-group fw-bold">
              <li style={{ color: "blue" }} className="list-group-item list-group-item-action">
                Contact : {contact}
              </li>
              <li style={{ color: "purple" }} className="list-group-item list-group-item-action">
                Email : {email}
              </li>
            </ul>
          </div>
          
        </div>
      </div>

      <ul className="list-group my-3">
     <li className="list-group-item list-group-item-action">
     <h4 className="text-danger fw-bold">Description : </h4>
     <hr />
      <p className="card-text fw-bold fst-italic">{description}</p>
     </li>
      </ul>

      <ul className="list-group fw-bold">
        <li className="list-group-item list-group-item-action">
          <p className="card-text fs-5"><span className="text-danger">Duration</span> : {duration} Hours</p>
        </li>
        <li className="list-group-item list-group-item-action">
          <p className="car-Text fs-5"><span className="text-danger">Date</span> : {date}</p>
        </li>
      </ul>
      
    </div>
    <div className="d-flex gap-4 justify-content-start mb-4 mx-4">
      {/* <button className="btn btn-primary text-light" style={{width:"50%"}}>Edit</button> */}
      {/* <EditButton data={data}/> */}
      {/* <button
        className="btn btn-danger"
        style={{ width: "100%" }}
        onClick={() => deleteFunc(id)}
      >
        Delete
      </button> */}
    </div>
  </div>
  )
}

export default CardData