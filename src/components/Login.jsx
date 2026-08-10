import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Login.css";

import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaShieldAlt,
  FaUserFriends,
  FaChartLine,
} from "react-icons/fa";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const employees =
      JSON.parse(localStorage.getItem("employees")) || [];

    const user = employees.find(
      (emp) =>
        emp.email === login.email &&
        emp.password === login.password
    );

    if (user) {

      // Update missing fields permanently

const index = employees.indexOf(user);

employees[index] = {

    ...user,

    employeeId:
        user.employeeId ||
        ("EMP" +
            String(index + 1).padStart(3, "0")),

    department:
        user.department || "General",

    designation:
        user.designation || "Employee",

    phone:
        user.phone || "9876543210",

    joinDate:
        user.joinDate ||
        new Date().toLocaleDateString(),

    leaveBalance:
        user.leaveBalance || "12 Days"

};

// Save updated employees list
localStorage.setItem(
    "employees",
    JSON.stringify(employees)
);

// Save logged in user
localStorage.setItem(
    "loggedInUser",
    JSON.stringify(employees[index])
);

localStorage.setItem(
    "isLoggedIn",
    "true"
);

navigate("/dashboard");

    } else {

      alert("Invalid Email or Password ❌");

    }
  }

  return (
    <div className="login-page">

      {/* LEFT */}

      <div className="login-left">

        <span className="login-tag">
          LeaveFlow HR Platform
        </span>

        <h1>Welcome Back 👋</h1>

        <p>
          Securely manage employee leave,
          approvals, attendance and HR operations
          from one intelligent cloud platform.
        </p>

        <div className="feature-list">

          <div>
            <FaShieldAlt />
            <span>Enterprise Grade Security</span>
          </div>

          <div>
            <FaUserFriends />
            <span>Employee Self Service</span>
          </div>

          <div>
            <FaChartLine />
            <span>Smart HR Analytics</span>
          </div>

        </div>

      </div>

      {/* RIGHT */}

      <div className="login-right">

        <div className="login-card">

          <h2>Employee Login</h2>

          <p>
            Sign in to continue to LeaveFlow.
          </p>

          <form onSubmit={handleSubmit}>

            {/* EMAIL */}

            <div className="form-group">

              <label>Email Address</label>

              <div className="input-box">

                <FaEnvelope />

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={login.email}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>

            {/* PASSWORD */}

            <div className="form-group">

              <label>Password</label>

              <div className="input-box">

                <FaLock />

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  placeholder="Enter your password"
                  value={login.password}
                  onChange={handleChange}
                  required
                />

                <button
                  type="button"
                  className="eye-btn"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? (
                    <FaEyeSlash />
                  ) : (
                    <FaEye />
                  )}
                </button>

              </div>

            </div>

            {/* OPTIONS */}

            <div className="login-options">

              <label className="remember-me">

                <input type="checkbox" />

                Remember Me

              </label>

              <a
                href="#"
                className="forgot-password"
              >
                Forgot Password?
              </a>

            </div>

            {/* BUTTON */}

            <button
              type="submit"
              className="login-button"
            >
              Sign In
            </button>

            {/* REGISTER */}

            <div className="register-link">

              Don't have an account?

              <Link to="/register">
                Create Account
              </Link>

            </div>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Login;