import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import "../css/AdminDashboard.css";

import {
    FaUsers,
    FaClock,
    FaCheckCircle,
    FaTimesCircle,
    FaChartBar,
    FaCog,
    FaSignOutAlt,
    FaBars,
    FaSearch,
    FaUserTie,
    FaClipboardList,
    FaArrowLeft,
    FaEnvelope,
    FaBuilding,
    FaIdBadge
} from "react-icons/fa";


function AdminDashboard() {

    const navigate = useNavigate();

    /* ================= SIDEBAR ================= */

    const [sidebarOpen, setSidebarOpen] = useState(true);

    const [activePage, setActivePage] = useState("dashboard");


    /* ================= SEARCH ================= */

    const [search, setSearch] = useState("");


    /* ================= LEAVE REQUESTS ================= */

    const [leaveRequests, setLeaveRequests] = useState([]);


    /* ================= SETTINGS ================= */

    const [notifications, setNotifications] = useState(true);

    const [emailUpdates, setEmailUpdates] = useState(true);


    /* ================= LOAD REQUESTS ================= */

    useEffect(() => {

        refreshRequests();

    }, []);


    function refreshRequests() {

        const requests =
            JSON.parse(localStorage.getItem("leaveRequests")) || [];

        setLeaveRequests(requests);

    }


    /* ================= EMPLOYEES ================= */

    const employees =
        JSON.parse(localStorage.getItem("employees")) || [];


    /* ================= COUNTS ================= */

    const pending =
        leaveRequests.filter(
            (item) => item.status === "Pending"
        ).length;


    const approved =
        leaveRequests.filter(
            (item) => item.status === "Approved"
        ).length;


    const rejected =
        leaveRequests.filter(
            (item) => item.status === "Rejected"
        ).length;


    /* ================= SEARCH ================= */

    const filteredRequests = leaveRequests.filter((item) => {

        const keyword = search.toLowerCase();

        return (
            item.userName?.toLowerCase().includes(keyword) ||
            item.department?.toLowerCase().includes(keyword) ||
            item.leaveType?.toLowerCase().includes(keyword) ||
            item.employeeId?.toLowerCase().includes(keyword)
        );

    });


    /* ================= APPROVE ================= */

    function approveLeave(id) {

        const updatedRequests =
            leaveRequests.map((item) =>
                item.id === id
                    ? { ...item, status: "Approved" }
                    : item
            );


        setLeaveRequests(updatedRequests);


        localStorage.setItem(
            "leaveRequests",
            JSON.stringify(updatedRequests)
        );

    }


    /* ================= REJECT ================= */

    function rejectLeave(id) {

        const updatedRequests =
            leaveRequests.map((item) =>
                item.id === id
                    ? { ...item, status: "Rejected" }
                    : item
            );


        setLeaveRequests(updatedRequests);


        localStorage.setItem(
            "leaveRequests",
            JSON.stringify(updatedRequests)
        );

    }


    /* ================= LOGOUT ================= */

    function logout() {

        localStorage.removeItem("isAdminLoggedIn");

        navigate("/admin-login");

    }


    /* ================= NAVIGATION ================= */

    function openPage(page) {

        setActivePage(page);

        setSearch("");

    }


    /* ========================================================= */
    /* ================= DASHBOARD PAGE ======================== */
    /* ========================================================= */

    function DashboardPage() {

        return (

            <>

                {/* HEADER */}

                <div className="topbar">

                    <div className="top-left">

                        <button
                            className="menu-btn"
                            onClick={() =>
                                setSidebarOpen(!sidebarOpen)
                            }
                        >
                            <FaBars />
                        </button>


                        <div>

                            <h1>
                                Admin Dashboard
                            </h1>

                            <p>
                                Manage employees and leave requests
                            </p>

                        </div>

                    </div>


                    <div className="admin-profile">

                        <div className="avatar">

                            <FaUserTie />

                        </div>


                        <div>

                            <h4>
                                Super Admin
                            </h4>

                            <span>
                                LeaveFlow HR
                            </span>

                        </div>

                    </div>

                </div>


                {/* DASHBOARD CARDS */}

                <div className="dashboard-cards">


                    <div
                        className="dashboard-card total"
                        onClick={() => openPage("employees")}
                        style={{ cursor: "pointer" }}
                    >

                        <div className="icon">
                            <FaUsers />
                        </div>

                        <div>

                            <h5>
                                Total Employees
                            </h5>

                            <h2>
                                {employees.length}
                            </h2>

                        </div>

                    </div>


                    <div
                        className="dashboard-card pending"
                        onClick={() => openPage("requests")}
                        style={{ cursor: "pointer" }}
                    >

                        <div className="icon">
                            <FaClock />
                        </div>

                        <div>

                            <h5>
                                Pending
                            </h5>

                            <h2>
                                {pending}
                            </h2>

                        </div>

                    </div>


                    <div className="dashboard-card approved">

                        <div className="icon">
                            <FaCheckCircle />
                        </div>

                        <div>

                            <h5>
                                Approved
                            </h5>

                            <h2>
                                {approved}
                            </h2>

                        </div>

                    </div>


                    <div className="dashboard-card rejected">

                        <div className="icon">
                            <FaTimesCircle />
                        </div>

                        <div>

                            <h5>
                                Rejected
                            </h5>

                            <h2>
                                {rejected}
                            </h2>

                        </div>

                    </div>


                </div>


                {/* RECENT LEAVE REQUESTS */}

                <div
                    style={{
                        background: "#ffffff",
                        borderRadius: "16px",
                        padding: "30px",
                        marginTop: "35px",
                        boxShadow: "0 8px 25px rgba(0,0,0,0.06)"
                    }}
                >

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}
                    >

                        <div>

                            <h2 style={{ color: "#111827" }}>
                                Leave Management Overview
                            </h2>

                            <p
                                style={{
                                    color: "#64748b",
                                    marginTop: "6px"
                                }}
                            >
                                Review and manage employee leave activity.
                            </p>

                        </div>


                        <button
                            onClick={() => openPage("requests")}
                            style={{
                                border: "none",
                                background: "#2563eb",
                                color: "#ffffff",
                                padding: "11px 18px",
                                borderRadius: "9px",
                                cursor: "pointer"
                            }}
                        >
                            View Leave Requests
                        </button>

                    </div>

                </div>

            </>

        );

    }


    /* ========================================================= */
    /* ================= EMPLOYEES PAGE ======================== */
    /* ========================================================= */

    function EmployeesPage() {

        return (

            <>

                <div className="topbar">

                    <div className="top-left">

                        <button
                            className="menu-btn"
                            onClick={() =>
                                setSidebarOpen(!sidebarOpen)
                            }
                        >
                            <FaBars />
                        </button>


                        <div>

                            <h1>
                                Employee Directory
                            </h1>

                            <p>
                                View employees registered in LeaveFlow.
                            </p>

                        </div>

                    </div>

                </div>


                {/* TOTAL */}

                <div
                    className="dashboard-cards"
                    style={{ marginTop: "30px" }}
                >

                    <div className="dashboard-card total">

                        <div className="icon">
                            <FaUsers />
                        </div>

                        <div>

                            <h5>
                                Total Employees
                            </h5>

                            <h2>
                                {employees.length}
                            </h2>

                        </div>

                    </div>

                </div>


                {/* EMPLOYEE TABLE */}

                <div className="table-wrapper">

                    <table>

                        <thead>

                            <tr>

                                <th>
                                    Employee ID
                                </th>

                                <th>
                                    Employee Name
                                </th>

                                <th>
                                    Email
                                </th>

                                <th>
                                    Department
                                </th>

                            </tr>

                        </thead>


                        <tbody>

                            {employees.length > 0 ? (

                                employees.map((employee, index) => (

                                    <tr key={index}>

                                        <td>
                                            {employee.employeeId ||
                                                `EMP${String(index + 1).padStart(3, "0")}`}
                                        </td>

                                        <td>
                                            {employee.fullName ||
                                                employee.name ||
                                                "Employee"}
                                        </td>

                                        <td>
                                            {employee.email ||
                                                "Not Available"}
                                        </td>

                                        <td>
                                            {employee.department ||
                                                "General"}
                                        </td>

                                    </tr>

                                ))

                            ) : (

                                <tr>

                                    <td
                                        colSpan="4"
                                        className="no-data"
                                    >
                                        No employee records available.
                                    </td>

                                </tr>

                            )}

                        </tbody>

                    </table>

                </div>

            </>

        );

    }


    /* ========================================================= */
    /* ================= LEAVE REQUESTS PAGE =================== */
    /* ========================================================= */

    function LeaveRequestsPage() {

        return (

            <>

                <div className="topbar">

                    <div className="top-left">

                        <button
                            className="menu-btn"
                            onClick={() =>
                                setSidebarOpen(!sidebarOpen)
                            }
                        >
                            <FaBars />
                        </button>


                        <div>

                            <h1>
                                Leave Requests
                            </h1>

                            <p>
                                Review and manage employee leave requests.
                            </p>

                        </div>

                    </div>

                </div>


                {/* SEARCH */}

                <div className="search-area">

                    <div className="search-box">

                        <FaSearch />

                        <input
                            type="text"
                            placeholder="Search employee, department or leave type..."
                            value={search}
                            onChange={(e) =>
                                setSearch(e.target.value)
                            }
                        />

                    </div>

                </div>


                {/* TABLE */}

                <div className="table-wrapper">

                    <table>

                        <thead>

                            <tr>

                                <th>
                                    Employee
                                </th>

                                <th>
                                    Employee ID
                                </th>

                                <th>
                                    Department
                                </th>

                                <th>
                                    Leave Type
                                </th>

                                <th>
                                    Duration
                                </th>

                                <th>
                                    Status
                                </th>

                                <th>
                                    Action
                                </th>

                            </tr>

                        </thead>


                        <tbody>

                            {filteredRequests.length > 0 ? (

                                [...filteredRequests]
                                    .reverse()
                                    .map((item) => (

                                        <tr key={item.id}>

                                            <td>
                                                {item.userName}
                                            </td>

                                            <td>
                                                {item.employeeId}
                                            </td>

                                            <td>
                                                {item.department}
                                            </td>

                                            <td>
                                                {item.leaveType}
                                            </td>

                                            <td>
                                                {item.fromDate} - {item.toDate}
                                            </td>

                                            <td>

                                                <span
                                                    className={`status ${item.status?.toLowerCase()}`}
                                                >
                                                    {item.status}
                                                </span>

                                            </td>

                                            <td>

                                                {item.status === "Pending" ? (

                                                    <>

                                                        <button
                                                            className="approve-btn"
                                                            onClick={() =>
                                                                approveLeave(item.id)
                                                            }
                                                        >
                                                            Approve
                                                        </button>


                                                        <button
                                                            className="reject-btn"
                                                            onClick={() =>
                                                                rejectLeave(item.id)
                                                            }
                                                        >
                                                            Reject
                                                        </button>

                                                    </>

                                                ) : (

                                                    <span
                                                        style={{
                                                            color: "#64748b",
                                                            fontWeight: "600"
                                                        }}
                                                    >
                                                        No Action
                                                    </span>

                                                )}

                                            </td>

                                        </tr>

                                    ))

                            ) : (

                                <tr>

                                    <td
                                        colSpan="7"
                                        className="no-data"
                                    >
                                        No leave requests found.
                                    </td>

                                </tr>

                            )}

                        </tbody>

                    </table>

                </div>

            </>

        );

    }


    /* ========================================================= */
    /* ================= SETTINGS PAGE ========================= */
    /* ========================================================= */

    function SettingsPage() {

        function saveSettings() {

            alert(
                "Admin settings saved successfully ✅"
            );

        }


        return (

            <>

                <div className="topbar">

                    <div className="top-left">

                        <button
                            className="menu-btn"
                            onClick={() =>
                                setSidebarOpen(!sidebarOpen)
                            }
                        >
                            <FaBars />
                        </button>


                        <div>

                            <h1>
                                Admin Settings
                            </h1>

                            <p>
                                Manage administrative preferences.
                            </p>

                        </div>

                    </div>

                </div>


                <div
                    style={{
                        background: "#ffffff",
                        borderRadius: "18px",
                        padding: "30px",
                        marginTop: "30px",
                        maxWidth: "850px",
                        boxShadow: "0 8px 25px rgba(0,0,0,0.06)"
                    }}
                >

                    {/* SYSTEM NOTIFICATIONS */}

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "20px 0",
                            borderBottom: "1px solid #e5e7eb"
                        }}
                    >

                        <div>

                            <h3 style={{ color: "#111827" }}>
                                System Notifications
                            </h3>

                            <p
                                style={{
                                    color: "#64748b",
                                    marginTop: "6px"
                                }}
                            >
                                Receive notifications about leave requests and system updates.
                            </p>

                        </div>


                        <input
                            type="checkbox"
                            checked={notifications}
                            onChange={(e) =>
                                setNotifications(e.target.checked)
                            }
                        />

                    </div>


                    {/* EMAIL UPDATES */}

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "20px 0",
                            borderBottom: "1px solid #e5e7eb"
                        }}
                    >

                        <div>

                            <h3 style={{ color: "#111827" }}>
                                Email Updates
                            </h3>

                            <p
                                style={{
                                    color: "#64748b",
                                    marginTop: "6px"
                                }}
                            >
                                Receive important HR and system updates through email.
                            </p>

                        </div>


                        <input
                            type="checkbox"
                            checked={emailUpdates}
                            onChange={(e) =>
                                setEmailUpdates(e.target.checked)
                            }
                        />

                    </div>


                    {/* APPLICATION INFORMATION */}

                    <div
                        style={{
                            padding: "20px 0",
                            borderBottom: "1px solid #e5e7eb"
                        }}
                    >

                        <h3 style={{ color: "#111827" }}>
                            Application Information
                        </h3>

                        <p
                            style={{
                                color: "#64748b",
                                marginTop: "6px"
                            }}
                        >
                            LeaveFlow HR Suite provides centralized
                            employee leave management and HR operations.
                        </p>

                    </div>


                    {/* SAVE */}

                    <button
                        onClick={saveSettings}
                        style={{
                            marginTop: "25px",
                            background: "#2563eb",
                            color: "#ffffff",
                            border: "none",
                            borderRadius: "10px",
                            padding: "12px 25px",
                            cursor: "pointer",
                            fontSize: "15px",
                            fontWeight: "600"
                        }}
                    >
                        Save Settings
                    </button>

                </div>

            </>

        );

    }


    /* ========================================================= */
    /* ================= MAIN RETURN =========================== */
    /* ========================================================= */

    return (

        <div className="admin-layout">


            {/* ================= SIDEBAR ================= */}

            <div
                className={
                    sidebarOpen
                        ? "sidebar"
                        : "sidebar collapsed"
                }
            >


                {/* LOGO */}

                <div className="logo">

                    <div className="logo-circle">
                        LF
                    </div>


                    <div>

                        <h2>
                            LeaveFlow
                        </h2>

                        <span>
                            HR Suite
                        </span>

                    </div>

                </div>


                {/* MENU */}

                <ul>


                    {/* DASHBOARD */}

                    <li
                        className={
                            activePage === "dashboard"
                                ? "active"
                                : ""
                        }
                        onClick={() =>
                            openPage("dashboard")
                        }
                    >

                        <FaChartBar />

                        <span>
                            Dashboard
                        </span>

                    </li>


                    {/* EMPLOYEES */}

                    <li
                        className={
                            activePage === "employees"
                                ? "active"
                                : ""
                        }
                        onClick={() =>
                            openPage("employees")
                        }
                    >

                        <FaUsers />

                        <span>
                            Employees
                        </span>

                    </li>


                    {/* LEAVE REQUESTS */}

                    <li
                        className={
                            activePage === "requests"
                                ? "active"
                                : ""
                        }
                        onClick={() =>
                            openPage("requests")
                        }
                    >

                        <FaClipboardList />

                        <span>
                            Leave Requests
                        </span>

                    </li>


                    {/* SETTINGS */}

                    <li
                        className={
                            activePage === "settings"
                                ? "active"
                                : ""
                        }
                        onClick={() =>
                            openPage("settings")
                        }
                    >

                        <FaCog />

                        <span>
                            Settings
                        </span>

                    </li>


                </ul>


                {/* LOGOUT */}

                <button
                    className="logout-sidebar"
                    onClick={logout}
                >

                    <FaSignOutAlt />

                    Logout

                </button>


            </div>


            {/* ================= MAIN ================= */}

            <div className="admin-main">


                {activePage === "dashboard" && (
                    <DashboardPage />
                )}


                {activePage === "employees" && (
                    <EmployeesPage />
                )}


                {activePage === "requests" && (
                    <LeaveRequestsPage />
                )}


                {activePage === "settings" && (
                    <SettingsPage />
                )}


            </div>


        </div>

    );

}


export default AdminDashboard;