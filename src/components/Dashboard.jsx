import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import "../css/Dashboard.css";

import {
  FaCalendarCheck,
  FaClipboardList,
  FaChartLine,
  FaCalendarAlt,
  FaBullhorn,
  FaArrowRight,
  FaIdBadge,
  FaBuilding,
  FaUserTie,
  FaUsers
} from "react-icons/fa";

function Dashboard() {

  const navigate = useNavigate();

  const loggedInUser =
    JSON.parse(localStorage.getItem("loggedInUser")) || {};

  const employeeName =
    loggedInUser.fullName || "Employee";

  const employeeEmail =
    loggedInUser.email || "employee@gmail.com";

  const employeeId =
    "EMP" + (employeeName.length * 100 + 1);

  const department = "IT";

  const designation = "Employee";

  const [employeeCount, setEmployeeCount] = useState(0);


  useEffect(() => {

    const employees =
      JSON.parse(localStorage.getItem("employees")) || [];

    setEmployeeCount(employees.length);

  }, []);


  return (

    <div className="dashboard">

      <Sidebar />


      <main className="dashboard-main">


        {/* ================= HERO ================= */}

        <section className="hero-banner">

          <div className="hero-left">

            <span className="hero-tag">
              LeaveFlow Enterprise HRMS
            </span>

            <h2>
              Good Morning, {employeeName} 👋
            </h2>

            <p>
              Manage your leave requests, attendance,
              employee information and HR activities
              from one convenient dashboard.
            </p>

          </div>


          <div className="hero-right">

            <div className="hero-card">

              <h4>
                Today's Date
              </h4>

              <span>
                {new Date().toLocaleDateString()}
              </span>

            </div>


            <div className="hero-card">

              <h4>
                Leave Balance
              </h4>

              <span>
                12 Days
              </span>

            </div>

          </div>

        </section>



        {/* ================= QUICK ACTIONS ================= */}

        <section className="quick-actions">


          {/* APPLY LEAVE */}

          <div
            className="quick-card"
            onClick={() => navigate("/leave")}
          >

            <div className="quick-icon blue">
              <FaCalendarCheck />
            </div>

            <h3>
              Apply Leave
            </h3>

            <p>
              Submit a leave request.
            </p>

            <FaArrowRight className="arrow-icon" />

          </div>



          {/* LEAVE STATUS */}

          <div
            className="quick-card"
            onClick={() => navigate("/status")}
          >

            <div className="quick-icon green">
              <FaClipboardList />
            </div>

            <h3>
              Leave Status
            </h3>

            <p>
              Track your leave requests.
            </p>

            <FaArrowRight className="arrow-icon" />

          </div>



          {/* CALENDAR */}

          <div className="quick-card calendar-coming-soon">

            <div className="quick-icon orange">
              <FaCalendarAlt />
            </div>

            <h3>
              Calendar
            </h3>

            <p>
              View company holidays and events.
            </p>

            <span className="coming-soon-badge">
              Coming Soon
            </span>

          </div>



          {/* HR RESOURCES */}

          <div className="quick-card">

            <div className="quick-icon purple">
              <FaUsers />
            </div>

            <h3>
              HR Resources
            </h3>

            <p>
              Essential HR policies and workplace
              guidelines for employees.
            </p>

            <div className="hr-resource-info">

              <span>
                Leave Policy
              </span>

              <span>
                Attendance Guidelines
              </span>

              <span>
                Workplace Policies
              </span>

            </div>

          </div>


        </section>



        {/* ================= DASHBOARD GRID ================= */}

        <section className="dashboard-grid">


          {/* ================= EMPLOYEE SUMMARY ================= */}

          <div className="employee-summary">

            <div className="card-header">

              <FaChartLine />

              <h2>
                Employee Summary
              </h2>

            </div>


            <div className="summary-item">

              <span>
                <FaIdBadge />
                Employee ID
              </span>

              <strong>
                {employeeId}
              </strong>

            </div>


            <div className="summary-item">

              <span>
                <FaBuilding />
                Department
              </span>

              <strong>
                {department}
              </strong>

            </div>


            <div className="summary-item">

              <span>
                <FaUserTie />
                Designation
              </span>

              <strong>
                {designation}
              </strong>

            </div>


            <div className="summary-item">

              <span>
                Email
              </span>

              <strong>
                {employeeEmail}
              </strong>

            </div>


            <div className="summary-item">

              <span>
                Leave Balance
              </span>

              <strong>
                12 Days
              </strong>

            </div>

          </div>



          {/* ================= COMPANY ANNOUNCEMENTS ================= */}

          <div className="company-announcements">

            <div className="card-header">

              <FaBullhorn />

              <h2>
                Company Announcements
              </h2>

            </div>


            <div className="announcement">

              <h4>
                🇮🇳 Independence Day Holiday
              </h4>

              <p>
                15 August 2026
              </p>

            </div>


            <div className="announcement">

              <h4>
                📅 Quarterly Review Meeting
              </h4>

              <p>
                Friday • 10:30 AM
              </p>

            </div>


            <div className="announcement">

              <h4>
                🏆 Employee of the Month
              </h4>

              <p>
                Arun Kumar
              </p>

            </div>

          </div>


        </section>



        {/* ================= MY LEAVE SUMMARY ================= */}

        <section className="my-leave-summary">

          <div className="card-header">

            <FaClipboardList />

            <h2>
              My Leave Summary
            </h2>

          </div>


          <div className="leave-grid">


            <div className="leave-box">

              <h4>
                Casual Leave
              </h4>

              <span>
                05 Days Remaining
              </span>

            </div>


            <div className="leave-box">

              <h4>
                Sick Leave
              </h4>

              <span>
                07 Days Remaining
              </span>

            </div>


            <div className="leave-box">

              <h4>
                Earned Leave
              </h4>

              <span>
                10 Days Remaining
              </span>

            </div>


            <div className="leave-box">

              <h4>
                Last Leave
              </h4>

              <span>
                12 Jul 2026
              </span>

            </div>


            <div className="leave-box">

              <h4>
                Next Holiday
              </h4>

              <span>
                15 Aug 2026
              </span>

            </div>


            <div className="leave-box">

              <h4>
                Reporting Manager
              </h4>

              <span>
                HR Manager
              </span>

            </div>


          </div>

        </section>


      </main>

    </div>

  );

}

export default Dashboard;