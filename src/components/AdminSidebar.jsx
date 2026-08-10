import { NavLink, useNavigate } from "react-router-dom";

import {
    FaHome,
    FaUserPlus,
    FaUsers,
    FaClipboardList,
    FaSignOutAlt
} from "react-icons/fa";

import "../css/Sidebar.css";

function AdminSidebar() {

    const navigate = useNavigate();

    function handleLogout() {

        localStorage.removeItem("isLoggedIn");

        navigate("/admin-login");

    }

    return (

        <aside className="sidebar">

            <div className="sidebar-logo">

                <h2>LeaveFlow</h2>

                <p>Admin Panel</p>

            </div>

            <nav>

                <NavLink to="/admin-dashboard">

                    <FaHome />

                    Dashboard

                </NavLink>

                <NavLink to="/admin/add-employee">

                    <FaUserPlus />

                    Add Employee

                </NavLink>

                <NavLink to="/admin/employees">

                    <FaUsers />

                    Employee List

                </NavLink>

                <NavLink to="/admin/pending-requests">

                    <FaClipboardList />

                    Pending Requests

                </NavLink>

            </nav>

            <div className="sidebar-footer">

                <button onClick={handleLogout}>

                    <FaSignOutAlt />

                    Logout

                </button>

            </div>

        </aside>

    );

}

export default AdminSidebar;