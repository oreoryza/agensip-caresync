import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import Auth from "./pages/Auth"
import Topbar from "./components/Topbar"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Schedule from "./pages/Schedule"
import Appointment from "./pages/Appointment"
import Employee from "./pages/Employee"
import EmployeeDetail from "./pages/EmployeeDetail"
import Patients from "./pages/Patients"
import HelpCenter from "./pages/HelpCenter"
import Profile from "./pages/Profile"
import Settings from "./pages/Settings"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import GetStarted from "./pages/GetStarted"

function App() {
  const { token } = useSelector((state) => state.token);

  return (
    <Router>
    <>
    {token ? (<div className="relative">
      <Topbar/>
      <div className="flex items-start relative pr-[40px]">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/schedule" element={<Schedule/>}/>
          <Route path="/patients" element={<Patients/>}/>
          <Route path="/appointment" element={<Appointment/>}/>
          <Route path="/employee" element={<Employee/>}/>
          <Route path="/employee/:id" element={<EmployeeDetail/>}/>
          <Route path="/help-center" element={<HelpCenter/>}/>
          <Route path="/getting-started" element={<GetStarted/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/settings" element={<Settings/>}/>
        </Routes>
      </div>
    </div>):(<Auth/>)}
    </>
    </Router>
  )
}

export default App
