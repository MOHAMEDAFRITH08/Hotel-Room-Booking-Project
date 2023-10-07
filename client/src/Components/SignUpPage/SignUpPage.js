import axios from "axios";
import React from "react";
// import { Link } from "react-router-dom";

export function RegisterPage() {
  function handleregister(event) {
    event.preventDefault();
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var phone = document.getElementById("phone").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    var dob = document.getElementById("dob").value;
    var city = document.getElementById("city").value;
    var roll = document.getElementById("roll").value;

    var userDetails = {
      fname: fname,
      lname: lname,
      email: email,
      password: password,
      phone: phone,
      age: age,
      gender: gender,
      dob: dob,
      city: city,
      roll: roll,
    };
    if (fname === "") {
      alert("Enter the fname");
    } else {
      axios.post("http://localhost:3008/Register", userDetails).then((res) => {
        if (res.data.status === "error") {
          alert("Data are not inserted");
        } else if (res.data.status === "success") {
          alert("Data are inserted Sucessfully");
          window.location.href = "/";
        }
      });
    }
  }
  return (
    <>
       <h1>Register Form</h1>
      <form onSubmit={handleregister}>
        <input type="text" id="fname" placeholder="Enter the Fname" />
        <br />
        <input type="text" id="lname" placeholder="Enter the lname" />
        <br />
        <input type="text" id="email" placeholder="Enter the email " />
        <br />
        <input type="password" id="password" placeholder="Enter the password" />
        <br />
        <input type="text" id="phone" placeholder="Enter the phone " />
        <br />
        <input type="text" id="age" placeholder="Enter the Age" />
        <br />
        <input type="text" id="gender" placeholder="Enter the gender" />
        <br />
        <input type="date" id="dob" placeholder="Enter the dob" />
        <br />
        <input type="text" id="city" placeholder="Enter the city" />
        <br />

        <select id="roll">
          <option>select the Roll</option>
          <option value="owner">OWNER</option>
          <option value="client">CLIENT</option>
          {/* <option value="admin">ADMIN</option> */}
        </select>
        <br />
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form> 
        {/* <form onSubmit={handleregister}>
                <main data-aos="fade-up" className="reg-bg">
                    <div className="RegMainPage w-100 h-100 d-flex align-items-center justify-content-center">
                        <div className="regCard container d-flex flex-column align-items-center justify-content-center gap-3">
                        <h1>Register Form</h1>
                            <input type="text"  placeholder="Enter Your Name" id="Fname" required />
                            <input type="text" placeholder="Enter Your Email" id="email" required />

                            <input type="password" placeholder="Enter Password" id="password" required />

                            <input type="tel" pattern="^[6-9]{1}[0-9]{9}" id="phone" placeholder="Enter Your PhoneNumber" required />
                            <input type="text" placeholder="Enter License Key" id="key" required />

                        
                            <div className="w-100 d-flex align-items-center justify-content-center gap-4">
                                <button className="rounded border-0 w-50" type="submit">REGISTER</button>
                            </div>
                            <p>Already have an Account ? <Link to='/'>Login</Link> </p>
                        </div>
                    </div>
                </main>
            </form> */}
    </>
  );
}
