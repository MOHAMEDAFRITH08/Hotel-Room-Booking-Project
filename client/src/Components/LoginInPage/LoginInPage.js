import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

export function LoginPage(){
    function handlelogin(event){
        event.preventDefault()
        var email=document.getElementById("email").value
        var password=document.getElementById("password").value

        var loginDetails={
            email:email,
            password:password
        }
        if(email===""){
            alert("Enter the Email")
        }
        else if(password===""){
            alert("Enter the Password ")
        }
        else{
            axios.post("http://localhost:3008/login",loginDetails)
            .then((res)=>{
                console.log(res)
                if(res.data.status==="success"){
                    var roll=res.data.dbRole
                    var id=res.data.dbId
                    console.log(roll);
                    console.log(id);
                    if(roll==="admin"){
                        window.location.href=`/adminDashboard/${id}`
                    }
                    else if(roll==="client"){
                        window.location.href=`/userDashboard/${id}`
                    }
                    else if(roll==="owner"){
                        window.location.href=`/ownerDashboard/${id}`
                        console.log(id);
                    }
                }
                else if(res.data.status==="invalid"){
                    alert("your password invalid")
                }
                // else if(res.data.status==="empty_set"){
                //     alert("Username or Password Invalid")
                // }
                else if(res.data.status==="admin_error"){
                    alert("Contact Admin")
                }
            })
        }

    }
    return(
        <>
            <h1>Login Page</h1>
            <form onSubmit={handlelogin}>

                <input type="text" id="email" placeholder="Enter the email"/><br/>
                <input type="password" id="password" placeholder="Enter the password"/><br/>
                <input type="submit" className="btn btn-success"  value="Login"/>
                <Link to="/Register"><input type="submit" className="btn btn-info"  value="Signup"/></Link>
            </form>

        </>
    );
}