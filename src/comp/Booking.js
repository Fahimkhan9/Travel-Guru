import React from "react";
import { Link, useParams } from "react-router-dom";
import travelplacedata from "../data/travelplacedata";
import Nav from "./Nav";
import "./Booking.css";

function Booking() {
  const { id } = useParams();

  const filter = travelplacedata.find(tplace => tplace.id === parseInt(id));

  return (
    <div className=" booking-page">
      <Nav color="white" filter="invert(100%)" showForm="true" />
      <div className="row container-fluid">
        <div className="col-md-6 pl-4 d-flex flex-column  justify-content-center">
          <h3>{filter.title}</h3>
          <p>{filter.about}</p>
        </div>
        <div className="col-md-6">
          <form className="booking-form p-4 d-flex flex-column justify-content-center">
            <div className="form-group">
              <label htmlFor="origin">Origin</label>
              <input type="text" value="Dhaka" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="Destination">Destination</label>
              <input
                type="text"
                value={filter.title}
                className="form-control"
              />
            </div>

            <div className="form-group ">
              <label htmlFor="From">From</label>
              <input type="date" value="2020-09-17" className="form-control" />
            </div>
            <div className="form-group ">
              <label htmlFor="to">To</label>
              <input type="date" value="2020-09-25" className="form-control" />
            </div>
            <Link to={"/search/" + filter.id}>
              <input
                type="submit"
                className="btn btn-warning  btn-block"
                value="Start Booking"
              />
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Booking;
