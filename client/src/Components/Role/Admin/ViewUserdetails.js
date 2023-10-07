import React, { useEffect, useState } from "react";

export function ViewUserdatails(){
    const[info,setInfo]=useState([])
    useEffect(()=>{
        fetch("http://localhost:3008/viewuserdetails")
        .then(data=>data.json())
        .then((response)=>{
            setInfo(response)
        })
    },[])
    return(
        <>
        {
            info.map((value,index)=>(
                <>
                <h1>hi {value.firstName}</h1>
                </>
            ))
        }
        </>
    );
}