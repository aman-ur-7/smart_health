import React, { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { IoManOutline } from "react-icons/io5";
import { FaUserDoctor } from "react-icons/fa6";
import { CiTimer } from "react-icons/ci";
import { FaSchool } from "react-icons/fa";
import { CiMedicalCross } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import Dashboard from "./Component/Dashboard";
import Appointment from "./Component/Appointment";
import DiseasePrediction from "./Component/Disease_Prediction";

const App = () => {
  const [activeSection, setActiveSection] = useState("Dashboard");

  const renderContent = () => {
    switch (activeSection) {
      case "Dashboard":
        return (
          <div>
            <Dashboard />
          </div>
        );
      case "Patien":
        return <div>Patients Content</div>;
      case "Doctors":
        return <div>Doctors Content</div>;
      case "Appointments":
        return (
          <div>
            <Appointment />
          </div>
        );
      case "Disease Prediction":
        return (
          <div>
            <DiseasePrediction />
          </div>
        );
      case "Medical Inventory":
        return <div>Medical Inventory Content</div>;
      default:
        return (
          <div>
            <Dashboard />
          </div>
        );
    }
  };

  return (
    <main className="APP">
      <section className="RCB_CLINIC">
        <div>HEALTH PREDICTION</div>
        <main>
          <div onClick={() => setActiveSection("Dashboard")}>
            <RxDashboard />
            Dashboard
          </div>
          <div onClick={() => setActiveSection("Patients")}>
            <IoManOutline />
            Patients
          </div>
          <div onClick={() => setActiveSection("Doctors")}>
            <FaUserDoctor />
            Doctors
          </div>
          <div onClick={() => setActiveSection("Appointments")}>
            <CiTimer />
            Appointments
          </div>
          <div onClick={() => setActiveSection("Disease Prediction")}>
            <FaSchool />
            Disease Prediction
          </div>
          <div onClick={() => setActiveSection("Medical Inventory")}>
            <CiMedicalCross />
            Medical Inventory
          </div>
        </main>
        <footer className="RCB_CLINIC">
          <div onClick={() => setActiveSection("Logout")}>
            <CiLogout />
            Logout
          </div>
        </footer>
      </section>
      <section className="MANAGEMENT">
        <div className="CONTAINER"> {renderContent()}</div>
      </section>
    </main>
  );
};

export default App;
