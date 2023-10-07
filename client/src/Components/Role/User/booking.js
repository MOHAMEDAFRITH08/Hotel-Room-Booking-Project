import React from "react";
import { Link } from "react-router-dom";

export function BookingPage() {
 
  return (
    <>
       <h1>Booking Form</h1>
      <form>
        <input type="text" id="fname" placeholder="Enter the Full Name" />
        <br />
        <input type="text" id="email" placeholder="Enter the Email " />
        <br />
        <input type="text" id="phone" placeholder="Enter the phone Number " />
        <br />
        <input type="text" id="age" placeholder="Enter the Age" />
        <br />
        <input type="text" id="gender" placeholder="Enter the gender" />
        <br />
        <input type="text" id="city" placeholder="Enter the Room Type" />
        <br />
        <h5>Select Date</h5>
        <input type="date"  /> - 
         <input type="date"  />
        <br />
       <Link to="/conformPage"> <button type="submit" className="btn btn-primary">
          Conform Booking
        </button></Link>
      </form> 
    </>
  );
}
