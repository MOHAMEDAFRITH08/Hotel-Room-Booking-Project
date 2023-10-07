import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export function OwnerPage() {
  var { id } = useParams();
  const [info, setInfo] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3008/getadmin/" + id)
      .then((data) => data.json())
      .then((response) => {
        setInfo(response[0].firstName);
      });
  }, []);
  function handleregister(event) {
    event.preventDefault();
    var hotelname = document.getElementById("hotelName").value;
    var location = document.getElementById("location").value;
    var email = document.getElementById("email").value;
    var roomcount = document.getElementById("roomCount").value;
    var roomtype = document.getElementById("roomType").value;
    var price = document.getElementById("price").value;
    var imagee = document.getElementById("image").value;

    var hotelDetails = {
      hotelName: hotelname,
      location: location,
      email: email,
      roomCount: roomcount,
      roomType: roomtype,
      price: price,
      imagee:imagee,
    };
    if (hotelname === "") {
      alert("Enter the Hotel Name");
    } else {
      axios
        .post("http://localhost:3008/hotelRegister", hotelDetails)
        .then((res) => {
          let id = res.data.id;
          if (res.data.status === "error") {
            alert("Data are not inserted");
          } else if (res.data.status === "success") {
            alert("Data are inserted Sucessfully");
            window.location.href = `/hoteldetails`;
          }
        });
    }
  }

  return (
    <>
      <h1>Hello {info}</h1>
      <form onSubmit={handleregister}>
        <input type="text" id="hotelName" placeholder="Enter the Hotel Name" />
        <br />
        <input
          type="text"
          id="location"
          placeholder="Enter the location"
          required
        />
        <br />
        <input type="text" id="email" placeholder="Enter the email" />
        <br />
        <input type="text" id="roomCount" placeholder="Enter the Room Count" />
        <br />
        <input type="text" id="roomType" placeholder="Enter the Room Type " />
        <br />
        <input type="text" id="price" placeholder="Enter the Price" />
        <br />
        <input type="text" id="image" placeholder="Enter Image URL"/>
        <br/>
        <button type="submit" className="btn btn-primary">
          Register Hotel
        </button>
      </form>
      <Link to="/hoteldetails">
        <button className="btn btn-primary">View Details</button>
      </Link>
    </>
  );
}
