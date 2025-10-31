import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import Auth from "./pages/Auth"
import Topbar from "./Components/Topbar"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import Schedule from "./Pages/Schedule"
import Appointment from "./Pages/Appointment"
import Employee from "./Pages/Employee"
import EmployeeDetail from "./pages/EmployeeDetail"
import Patients from "./Pages/Patients"
import PatientsDetail from "./pages/PatientsDetail"
import HelpCenter from "./Pages/HelpCenter"
import Profile from "./pages/Profile"
import Settings from "./pages/Settings"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import GetStarted from "./pages/GetStarted"
import NavbarMobile from "./components/NavbarMobile"
import SearchBar from "./pages/SearchBar"
import NotificationsPage from "./pages/NotificationsPage"
import ScrollToTop from "./components/ScrollToTop"

function App() {
  const { token } = useSelector((state) => state.token);

  return (
    <Router>
      <ScrollToTop />
      <>
        {token ? (<div className="relative">
          <Topbar/>
          <div className="flex items-start max-xl:justify-center relative xl:pr-[40px] max-xl:px-[20px]">
          <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/schedule" element={<Schedule/>}/>
              <Route path="/patients" element={<Patients/>}/>
              <Route path="/patients/:id" element={<PatientsDetail/>}/>
              <Route path="/appointment" element={<Appointment/>}/>
              <Route path="/employee" element={<Employee/>}/>
              <Route path="/employee/:id" element={<EmployeeDetail/>}/>
              <Route path="/help-center" element={<HelpCenter/>}/>
              <Route path="/getting-started" element={<GetStarted/>}/>
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/settings" element={<Settings/>}/>
              <Route path="/search" element={<SearchBar/>}/>
              <Route path="/notifications" element={<NotificationsPage/>}/>
            </Routes>
          </div>
          <NavbarMobile/>
        </div>):(<Auth/>)}
      </>
    </Router>
  )
}

export default App
