import React from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
export function AdminPage(){
    return(
        <>
        <div className="owner-home-page" >
                <h1 className="topic text-danger p-5">
                    <Typewriter options={{ strings: ['WELCOME TO ADMIN DASHBORD'], autoStart: true, loop: true }} />
                </h1>
                <div className="d-flex justify-content-end me-5">
                </div>
                <div className="row justify-content-center m-2">
                    <div class="card col-lg-4 m-3 card-size bg-dark h-50">
                        <img src="https://images.pexels.com/photos/8088450/pexels-photo-8088450.jpeg?auto=compress&cs=tinysrgb&w=600" class="card-img-top h-50" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title text-center text-danger"> View All Users</h5>
                            <center> <Link to='/viewuserdetails' class="btn btn-info ownerbutton   justidy-content-center p-1 w-75 fs-4">
                           View All Details        </Link></center>
                        </div>
                    </div>
                    <div class="card col-lg-4 m-3 card-size bg-dark h-50">
                        <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" class="card-img-top h-25" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title text-center text-success "> View All  Details</h5>
                            <center> <Link to='/viewstation' class="btn btn-success ownerbuttongreen  justidy-content-center mb-2 w-75 fs-4">
                            view Owner Details</Link></center>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
}