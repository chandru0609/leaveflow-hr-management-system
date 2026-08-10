import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../css/Register.css";
import SuccessModal from "./SuccessModal";

import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaCheckCircle,
  FaShieldAlt,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";

function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  function handleContinue() {
    setShowSuccess(false);
    navigate("/login");
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    let employees =
      JSON.parse(localStorage.getItem("employees")) || [];

    const alreadyExists = employees.find(
      (emp) => emp.email === user.email
    );

    if (alreadyExists) {
      alert("Employee already registered");
      return;
    }

    const newEmployee = {
      id: Date.now(),
      employeeId:
        "EMP" +
        String(employees.length + 1).padStart(3, "0"),
      fullName: user.fullName,
      email: user.email,
      password: user.password,
      phone: "",
      department: "General",
      designation: "Employee",
      joinDate: new Date().toLocaleDateString(),
      leaveBalance: 12,
    };

    employees.push(newEmployee);

    localStorage.setItem(
      "employees",
      JSON.stringify(employees)
    );

    setShowSuccess(true);
  }

  return (

    <>
  <SuccessModal
    show={showSuccess}
    title="Registration Successful"
    message="Your account has been created successfully."
    onClose={handleContinue}
  />

  <div className="register-page">

    <div className="register-left">

      <span className="register-badge">
        LeaveFlow HR Platform
      </span>

      <h1>
        Create Your
        <br />
        Employee Account
      </h1>

      <p>
        Join LeaveFlow and experience a modern employee leave
        management platform trusted by growing organizations.
      </p>

      <div className="register-features">

        <div>
          <FaCheckCircle />
          <span>Smart Leave Management</span>
        </div>

        <div>
          <FaShieldAlt />
          <span>Secure Employee Portal</span>
        </div>

        <div>
          <FaUsers />
          <span>HR Self Service</span>
        </div>

      </div>

    </div>

    <div className="register-right">

      <div className="register-card">

        <h2>Create Account</h2>

        <p>Register to access LeaveFlow.</p>

        <form onSubmit={handleSubmit}>

          <div className="input-group">

            <label>Full Name</label>

            <div className="input-box">

              <FaUser className="input-icon" />

              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={user.fullName}
                onChange={handleChange}
                required
              />

            </div>

          </div>

          <div className="input-group">

            <label>Email Address</label>

            <div className="input-box">

              <FaEnvelope className="input-icon" />

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={user.email}
                onChange={handleChange}
                required
              />

            </div>

          </div>

          <div className="input-group">

            <label>Password</label>

            <div className="input-box">

              <FaLock className="input-icon" />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Create password"
                value={user.password}
                onChange={handleChange}
                required
              />

              <button
                type="button"
                className="eye-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>

            </div>

          </div>

          <div className="input-group">

            <label>Confirm Password</label>

            <div className="input-box">

              <FaLock className="input-icon" />

              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm password"
                value={user.confirmPassword}
                onChange={handleChange}
                required
              />

              <button
                type="button"
                className="eye-btn"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
              >
                {showConfirmPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>

            </div>

          </div>

          <button
            type="submit"
            className="register-submit-btn"
          >
            Create Account
            <FaArrowRight />
          </button>

        </form>

        <div className="register-footer">

          <p>

            Already have an account?

            <Link to="/login">
              Login
            </Link>

          </p>

        </div>

              </div>

    </div>

  </div>

</>

  );
}

export default Register;