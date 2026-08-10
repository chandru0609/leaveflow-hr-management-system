import { useState } from "react";
import Sidebar from "./Sidebar";
import "../css/Profile.css";

import {
  FaUserCircle,
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaIdBadge,
  FaCalendarAlt,
  FaEdit,
  FaAward,
  FaTimes,
  FaSave
} from "react-icons/fa";

function Profile() {

  const storedEmployee =
    JSON.parse(localStorage.getItem("loggedInUser")) || {};

  const [employee, setEmployee] = useState(storedEmployee);

  const [editing, setEditing] = useState(false);

  const [formData, setFormData] = useState({
    fullName: storedEmployee.fullName || "",
    email: storedEmployee.email || "",
    phone: storedEmployee.phone || "",
    department: storedEmployee.department || "General",
    designation: storedEmployee.designation || "Employee",
    joinDate: storedEmployee.joinDate || ""
  });


  // ==============================
  // HANDLE INPUT CHANGE
  // ==============================

  function handleChange(e) {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

  }


  // ==============================
  // OPEN EDIT MODE
  // ==============================

  function handleEdit() {

    setFormData({
      fullName: employee.fullName || "",
      email: employee.email || "",
      phone: employee.phone || "",
      department: employee.department || "General",
      designation: employee.designation || "Employee",
      joinDate: employee.joinDate || ""
    });

    setEditing(true);

  }


  // ==============================
  // CANCEL EDIT
  // ==============================

  function handleCancel() {

    setEditing(false);

  }


  // ==============================
  // SAVE PROFILE
  // ==============================

  function handleSave() {

    const updatedEmployee = {
      ...employee,
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      department: formData.department,
      designation: formData.designation,
      joinDate: formData.joinDate
    };


    // Update React state

    setEmployee(updatedEmployee);


    // Save logged-in employee

    localStorage.setItem(
      "loggedInUser",
      JSON.stringify(updatedEmployee)
    );


    // Update employee list also

    const employees =
      JSON.parse(localStorage.getItem("employees")) || [];


    const updatedEmployees = employees.map((item) => {

      if (
        item.employeeId === employee.employeeId ||
        item.email === employee.email
      ) {

        return {
          ...item,
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          department: formData.department,
          designation: formData.designation,
          joinDate: formData.joinDate
        };

      }

      return item;

    });


    localStorage.setItem(
      "employees",
      JSON.stringify(updatedEmployees)
    );


    setEditing(false);

  }


  return (

    <div className="dashboard">

      <Sidebar />


      <div className="profile-main">

        {/* ================= HEADER ================= */}

        <div className="profile-header">

          <h1>My Profile</h1>

          <p>
            View and manage your employee information.
          </p>

        </div>


        {/* ================= PROFILE CARDS ================= */}

        <div className="profile-top">


          {/* ================= LEFT CARD ================= */}

          <div className="profile-left-card">

            <FaUserCircle className="profile-avatar" />

            <h2>
              {employee.fullName || "Employee"}
            </h2>

            <p>
              {employee.designation || "Employee"}
            </p>


            <button
              className="edit-profile-btn"
              onClick={handleEdit}
            >

              <FaEdit />

              Edit Profile

            </button>

          </div>


          {/* ================= RIGHT CARD ================= */}

          <div className="profile-right-card">

            <h2>
              Employee Information
            </h2>


            <div className="info-grid">


              {/* EMPLOYEE ID */}

              <div className="info-item">

                <FaIdBadge />

                <div>

                  <span>
                    Employee ID
                  </span>

                  <strong>
                    {employee.employeeId || "Not Assigned"}
                  </strong>

                </div>

              </div>


              {/* EMAIL */}

              <div className="info-item">

                <FaEnvelope />

                <div>

                  <span>
                    Email
                  </span>

                  <strong>
                    {employee.email || "Not Available"}
                  </strong>

                </div>

              </div>


              {/* PHONE */}

              <div className="info-item">

                <FaPhone />

                <div>

                  <span>
                    Phone
                  </span>

                  <strong>
                    {employee.phone || "Not Available"}
                  </strong>

                </div>

              </div>


              {/* DEPARTMENT */}

              <div className="info-item">

                <FaBuilding />

                <div>

                  <span>
                    Department
                  </span>

                  <strong>
                    {employee.department || "General"}
                  </strong>

                </div>

              </div>


              {/* JOINING DATE */}

              <div className="info-item">

                <FaCalendarAlt />

                <div>

                  <span>
                    Joining Date
                  </span>

                  <strong>
                    {employee.joinDate || "Not Available"}
                  </strong>

                </div>

              </div>


              {/* LEAVE BALANCE */}

              <div className="info-item">

                <FaAward />

                <div>

                  <span>
                    Leave Balance
                  </span>

                  <strong>
                    {employee.leaveBalance || "12 Days"}
                  </strong>

                </div>

              </div>


            </div>

          </div>

        </div>


        {/* ==========================================
            EDIT PROFILE FORM
        ========================================== */}

        {editing && (

          <div className="edit-profile-panel">

            <div className="edit-profile-header">

              <div>

                <h2>
                  Edit Profile
                </h2>

                <p>
                  Update your employee information.
                </p>

              </div>

              <button
                className="close-edit-btn"
                onClick={handleCancel}
              >
                <FaTimes />
              </button>

            </div>


            <div className="edit-form-grid">


              {/* FULL NAME */}

              <div className="form-group">

                <label>
                  Full Name
                </label>

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                />

              </div>


              {/* EMAIL */}

              <div className="form-group">

                <label>
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />

              </div>


              {/* PHONE */}

              <div className="form-group">

                <label>
                  Phone
                </label>

                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                />

              </div>


              {/* DEPARTMENT */}

              <div className="form-group">

                <label>
                  Department
                </label>

                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  placeholder="Enter department"
                />

              </div>


              {/* DESIGNATION */}

              <div className="form-group">

                <label>
                  Designation
                </label>

                <input
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  placeholder="Enter designation"
                />

              </div>


              {/* JOINING DATE */}

              <div className="form-group">

                <label>
                  Joining Date
                </label>

                <input
                  type="date"
                  name="joinDate"
                  value={formData.joinDate}
                  onChange={handleChange}
                />

              </div>


            </div>


            {/* BUTTONS */}

            <div className="edit-actions">

              <button
                className="cancel-btn"
                onClick={handleCancel}
              >

                <FaTimes />

                Cancel

              </button>


              <button
                className="save-btn"
                onClick={handleSave}
              >

                <FaSave />

                Save Changes

              </button>

            </div>

          </div>

        )}

      </div>

    </div>

  );

}

export default Profile;