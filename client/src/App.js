import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { LoginPage } from "./Components/LoginInPage/LoginInPage";
import { RegisterPage } from "./Components/SignUpPage/SignUpPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserPage } from "./Components/Role/User/User";
import { OwnerPage } from "./Components/Role/Owner/Owner";
import { AdminPage } from "./Components/Role/Admin/Admin";
import { HotelDetails } from "./Components/Role/Owner/HotelDetails";
import { UpdateDetails } from "./Components/Role/Owner/Update";
import { BookingPage } from "./Components/Role/User/booking";
import { ViewUserdatails } from "./Components/Role/Admin/ViewUserdetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/Register" element={<RegisterPage />} />
          <Route path="/adminDashboard/:id" element={<AdminPage />} />
          <Route path="/userDashboard/:id" element={<UserPage />} />
          <Route path="/ownerDashboard/:id" element={<OwnerPage />} />
          <Route path="/hoteldetails" element={<HotelDetails />} />
          <Route path="/updatedetails/:sNo" element={<UpdateDetails />} />
          <Route path="/bookingdetails" element={<BookingPage/>} />
          <Route path="/viewuserdetails" element={[<ViewUserdatails/>]}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
