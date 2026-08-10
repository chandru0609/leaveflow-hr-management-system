import { NavLink, useNavigate } from "react-router-dom";

import {
  FaHome,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaClipboardList,
} from "react-icons/fa";

import "../css/Sidebar.css";

function Sidebar() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("loggedInUser");

    navigate("/login");
  }

  return (
    <aside className="sidebar">

      {/* ================= LOGO ================= */}

      <div className="sidebar-logo">

        <h2>LeaveFlow</h2>

        <p>HR Management Portal</p>

      </div>


      {/* ================= NAVIGATION ================= */}

      <nav className="sidebar-nav">

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          <FaHome />
          <span>Dashboard</span>
        </NavLink>


        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          <FaUser />
          <span>My Profile</span>
        </NavLink>


        <NavLink
          to="/status"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          <FaClipboardList />
          <span>Leave Status</span>
        </NavLink>

      </nav>


      {/* ================= FOOTER ================= */}

      <div className="sidebar-footer">

        <button
          onClick={() => navigate("/settings")}
        >
          <FaCog />
          <span>Settings</span>
        </button>


        <button
          onClick={handleLogout}
        >
          <FaSignOutAlt />
          <span>Logout</span>
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;