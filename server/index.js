const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const mysql = require("mysql");
const crypto = require("crypto");

var storeEx = express();
storeEx.use(cors()); 
storeEx.use(bodyparser.json()); 
storeEx.use(express.json()); 
storeEx.use(bodyparser.urlencoded({ extended: true }));
storeEx.use(express.static("public")); 

let localDb = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Afrith@7688",
  database: "room_booking",
});
localDb.connect((error) => {
  //connect predefined mysql method
  if (error) {
    console.log(error);
  } else {
    console.log("Db Connected!");
  }
});
storeEx.get("/getAll", (request, response) => {
  let selectQuery = "select * from user_details";
  localDb.query(selectQuery, (error, result) => {
    if (error) {
      response.send(error);
    } else {
      response.send(result);
    }
  });
});
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
storeEx.post("/Register", (request, response) => {
  var sNo = crypto.randomUUID();
  var datetime = new Date();
  var createdDate = datetime.toISOString().slice(0,10)
  console.log(createdDate);
  let { fname, lname, email, password, phone, age, gender, dob, city, roll } = request.body;
  let insertQuery = `insert into user_details(sNo, firstName, lastName, email, password, phoneNumber, age, gender,dob, city, createdDate, updatedDate, createdBy, updatedBy,isRole) 
  values('${sNo}',?,?,?,?,?,?,?,?,?,'${createdDate}','${createdDate}','${sNo}','${sNo}',?)`;
  localDb.query(
    insertQuery,
    [fname,lname,email,password,phone,age,gender,dob,city,roll],
    (error, result) => {
      if (error) {
        response.send({ "status": "error" });
        console.log(error);
      } else {
        response.send({ "status": "success" });
        console.log("Data inserted successfully");
      }
    }
  );
});
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
storeEx.post("/login",(request,response)=>{
  let {email, password}=request.body;
  let selectquery = `select * from user_details where email=?`
  localDb.query(selectquery,[email],(error,result)=>{
    console.log(result);
      if(error){
          response.send({"status":"error"})
          console.log(error);
      }
      else if(email.length>0){
          let dbEmail = result[0].email
          let dbPassword = result[0].password
          let dbId = result[0].sNo
          let dbRole = result[0].isRole
          if(email === dbEmail && password === dbPassword){
              response.send({"status":"success","dbId":dbId,"dbRole":dbRole})
              console.log(result);
          }
          else{
              response.send({"status":"invalid"})
          }
      }
      else{
          response.send({"status":"admin_error"})
      }
  })
})
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
storeEx.get("/getadmin/:id",(request,response)=>{
  var {id}=request.params
  var selectQuery = `select * from user_details where sNo='${id}'`
  localDb.query(selectQuery,(error,result)=>{
    if(error){
      response.send({"status":"error"})
      console.log(error);
    }
    else {
      response.send(result)
      console.log(result);
    }
  })
})
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
storeEx.post("/hotelRegister", (request, response) => {
  var sNo = crypto.randomUUID();
  var datetime = new Date();
  var createdDate = datetime.toISOString().slice(0,10)
  console.log(createdDate);
  let { hotelName, location, email, roomCount, roomType, price, imagee} = request.body;
  let insertQuery = `insert into hotel_details(sNo, hotelName, location, email, roomCount, roomType, roomPrice, image, createdDate, createdBy, updatedDate, updatedBy) 
  values('${sNo}',?,?,?,?,?,?,?,'${createdDate}','${sNo}','${createdDate}','${sNo}')`;
  localDb.query(
    insertQuery,
    [hotelName,location,email,roomCount,roomType,price,imagee],
    (error, result) => {
      if (error) {
        response.send({ "status": "error" });
        console.log(error);
      } else {
        response.send({ "status": "success","id":sNo });
        console.log("Data inserted successfully");
      }
    }
  );
});
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
storeEx.get("/gethoteldetails/:sNo",(request,response)=>{
  let {sNo}=request.params
  let getQuery = `select * from hotel_details where sNo='${sNo}'`;
  localDb.query(getQuery,(error,result)=>{
    console.log(result);
    if(error){
      response.send({"status":"error"})
      console.log(error)
    }else{
      response.send(result)
      console.log(result);
    }
  })
})
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
storeEx.get("/gethoteldetails",(request,response)=>{
  let getQuery = `select * from hotel_details`;
  localDb.query(getQuery,(error,result)=>{
    console.log(result);
    if(error){
      response.send({"status":"error"})
      console.log(error)
    }else{
      response.send(result)
      console.log(result);
    }
  })
})
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
storeEx.put("/updatddetails/:sNo",(request,response)=>{
  var datetime = new Date();
  var createdDate = datetime.toISOString().slice(0,10)
  console.log(createdDate);
  let {sNo}=request.params
  let {hotelname,location,mail,roomcount,roomtype,price,imagee}=request.body
  let updateQuery = `update hotel_details set hotelName = '${hotelname}',location= '${location}',email='${mail}',roomCount='${roomcount}',roomType='${roomtype}',roomPrice='${price}',image='${imagee}',updatedDate='${createdDate}' where sNo='${sNo}'`;
  localDb.query(updateQuery,(error,result)=>{
    console.log(result);
    if(error){
      response.send({"status":"error"})
      console.log(error)
    }else{
      response.send({"status":"success"})
      console.log(result);
    }
  })
})
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
storeEx.post("/deletedata",(request,response)=>{
  let {sNo}=request.body
  let deleteQuery=`delete from hotel_details where sNo = '${sNo}'`;
  localDb.query(deleteQuery,(error,result)=>{
    if(error){
      response.send({"status":"error"})
      console.log(error);
    }else{
      response.send({"status":"success"})
    }
  })
})

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
storeEx.get("/viewuserdetails",(request,response)=>{
  var selectQuery = `select * from user_details where isRole = 'client'`
  localDb.query(selectQuery,(error,result)=>{
    if(error){
      response.send({"status":"error"})
      console.log(error);
    }
    else{
      response.send(result)
      console.log(result);
    }
  })
})
storeEx.listen(3008, () => {
  console.log("Your port is running in 3008");
});
