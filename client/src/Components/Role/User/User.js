import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function UserPage() {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3008/gethoteldetails")
      .then((data) => data.json())
      .then((response) => {
        setDetails(response);
      });
  },[]);
  return (
    <>
      <h1></h1>
      <div className="container">
        <div className="row row-cols-3">
          {details.map((value, index) => (
            <>
            <div class="card text-start">
              <img class="card-img-top" src={value.image} alt="Title"/>
              <div class="card-body bg-dark text-white">
                <h1 class="card-title text-center">{value.hotelName}</h1>
                <h2 class="card-text">Location : {value.location}</h2>
                <h2 class="card-text">No of Rooms : {value.roomCount}</h2>
                <h2 class="card-text">Room Type : {value.roomType}</h2>
                <h2 class="card-text">Price Range : {value.roomPrice}</h2>
                <Link to="/bookingdetails"><button className="btn btn-primary">Book Now</button></Link>
              </div>
            </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
