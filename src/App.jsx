import React, { useEffect } from "react"
import { useSelector } from "react-redux";
import Auth from "./pages/Auth"
import Topbar from "./components/Topbar"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Schedule from "./pages/Schedule"
import Appointment from "./pages/Appointment"
import Employee from "./pages/Employee"
import Patients from "./pages/Patients"
import HelpCenter from "./pages/HelpCenter"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  const { token } = useSelector((state) => state.token);

  return (
    <Router>
    <>
    {token ? (<div className="relative">
      <Topbar/>
      <div className="flex items-start relative">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/schedule" element={<Schedule/>}/>
          <Route path="/patients" element={<Patients/>}/>
          <Route path="/appointment" element={<Appointment/>}/>
          <Route path="/employee" element={<Employee/>}/>
          <Route path="/help-center" element={<HelpCenter/>}/>
        </Routes>
      </div>
    </div>):(<Auth/>)}
    </>
    </Router>
  )
}

export default App
