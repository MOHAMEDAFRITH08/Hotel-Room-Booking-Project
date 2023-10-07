import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function UpdateDetails() {
  let { sNo } = useParams();
  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3008/gethoteldetails/" + sNo)
      .then((data) => data.json())
      .then((response) => {
        setDetails(response[0]);
      });
  }, []);
  function handleupdate(event) {
    event.preventDefault();
    var hotelname = document.getElementById("hotelName").value;
    var location = document.getElementById("location").value;
    var mail = document.getElementById("mail").value;
    var roomcount = document.getElementById("roomCount").value;
    var roomtype = document.getElementById("roomType").value;
    var price = document.getElementById("price").value;
    var imagee = document.getElementById("image").value;

    let updatedDetails = {
      hotelname: hotelname,
      location: location,
      mail: mail,
      roomcount: roomcount,
      roomtype: roomtype,
      price: price,
      imagee:imagee
    }
    axios
      .put("http://localhost:3008/updatddetails/" + sNo, updatedDetails)
      .then((response) => {
        if (response.data.status === "error") {
          alert("Data Are Not Updated");
        } else if (response.data.status === "success") {
          alert("Updated Successfully!");
          window.location.href="/hoteldetails";
        }
      });
  }

  function newData(event) {
    setDetails(event.target.value);
  }
  return (
    <>      
      <form onSubmit={handleupdate} onChange={newData}>
        <h2>Hotel Name</h2>
        <input type="text" id="hotelName" value={details.hotelName} />
        <h2>Hotel Location</h2>
        <input type="text" id="location" value={details.location} />
        <h2>Mail</h2>
        <input type="text" id="mail" value={details.email} />
        <h2>Room Count</h2>
        <input type="text" id="roomCount" value={details.roomCount} />
        <h2>Room Type</h2>
        <input type="text" id="roomType" value={details.roomType} />
        <h2>Room Price</h2>
        <input type="text" id="price" value={details.roomPrice} />
        <br />
        <h2>Room Image</h2>
        <input type="text" id="image" value={details.image} />
        <br />
        <input type="submit" value="Update" className="btn btn-primary" />
      </form>
    </>
  );
}
