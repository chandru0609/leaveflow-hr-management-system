import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/AdminLogin.css";

import {
  FaUserShield,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaShieldAlt,
  FaArrowRight,
  FaUserCog,
  FaChartBar,
} from "react-icons/fa";

function AdminLogin() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [admin, setAdmin] = useState({
    username: "",
    password: "",
  });

  function handleChange(e) {

    setAdmin({
      ...admin,
      [e.target.name]: e.target.value,
    });

  }

  function handleSubmit(e) {

    e.preventDefault();

    if (
      admin.username === "admin" &&
      admin.password === "admin123"
    ) {

      localStorage.setItem(
        "isAdminLoggedIn",
        "true"
      );

      navigate("/admin-dashboard");

    } else {

      alert("Invalid Admin Credentials");

    }

  }

  return (

    <div className="admin-login-page">

      <div className="admin-left">

        <span className="admin-badge">
          LeaveFlow Administration
        </span>

        <h1>
          Secure Admin Portal
        </h1>

        <p>
          Access the LeaveFlow administration dashboard
          to manage employees, leave requests,
          analytics and organization settings.
        </p>

        <div className="admin-features">

          <div>
            <FaShieldAlt />
            <span>Secure Authentication</span>
          </div>

          <div>
            <FaUserCog />
            <span>Employee Management</span>
          </div>

          <div>
            <FaChartBar />
            <span>HR Analytics Dashboard</span>
          </div>

        </div>

      </div>

      <div className="admin-right">

        <div className="admin-card">

          <div className="card-header">

            <h2>Admin Login</h2>

            <p>
              Sign in to your administrator account.
            </p>

          </div>

          <form
            className="admin-form"
            onSubmit={handleSubmit}
          >

             <div className="input-group">

              <label>Admin Username</label>

              <div className="input-box">

                <FaUserShield className="input-icon" />

                <input
                  type="text"
                  name="username"
                  placeholder="Enter admin username"
                  value={admin.username}
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
                  placeholder="Enter password"
                  value={admin.password}
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

            <div className="login-options">

              <label className="remember-me">

                <input type="checkbox" />

                Remember Me

              </label>

              <Link
                to="/"
                className="forgot-link"
              >

                Forgot Password?

              </Link>

            </div>

            <button
              type="submit"
              className="admin-login-btn"
            >

              Login to Dashboard

              <FaArrowRight />

            </button>

                      </form>

                              <div className="admin-footer">

                        <p>
                            Authorized Personnel Only
                        </p>

                        <Link to="/">
                            ← Back to Home
                        </Link>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default AdminLogin;