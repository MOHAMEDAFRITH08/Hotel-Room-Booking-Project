import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function HotelDetails() {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3008/gethoteldetails")
      .then((data) => data.json())
      .then((response) => {
        setDetails(response);
        console.log(response);
      });
  }, []);
  function handleDelete(sNo) {
    var deleteData = {
      sNo: sNo,
    };
    axios
      .post("http://localhost:3008/deletedata", deleteData)
      .then((response) => {
        if (response.data.status === "error") {
          alert("Data Are Not Deleted");
        } else if (response.data.status === "success") {
          alert("Deleted Successfully!");
          window.location.reload();
        }
      });
  }
  return (
    <>
      <div className="container m-5">
        <div className="row row-cols-3 ">
          {details.map((value, index) => (
            <>
              <div className="card ">
                <div className="card-body bg-light bg-opacity-75 text-dark">
                  <img className="card-img-top" src={value.image}/>
                  <h1 className="text-center">Hotel Details</h1>
                  <h3>Hotel Name :{value.hotelName}</h3>
                  <h3>Location :{value.location}</h3>
                  <h3>Email :{value.email}</h3>
                  <h3>No Of Rooms :{value.roomCount}</h3>
                  <h3>Types :{value.roomType}</h3>
                  <h3>Price Range :{value.roomPrice}</h3>
                  <Link to={`/updatedetails/${value.sNo}`}>
                    <input
                      type="submit"
                      value="update"
                      className="btn btn-success "
                    />
                  </Link>
                  <input
                    type="submit"
                    onClick={() => {
                      handleDelete(value.sNo);
                    }}
                    value="delete"
                    className="btn btn-danger float-left ms-3"
                  />
                 
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="mt-5">
    <Link to="/">
          <input
            type="submit"
            value="Log Out"
            className="btn btn-warning float-left ms-3"
          /></Link>

    </div>

    </>
  );
}
