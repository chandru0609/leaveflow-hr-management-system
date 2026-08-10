import Sidebar from "./Sidebar";
import "../css/LeaveStatus.css";

import {
    FaClipboardList,
    FaCheckCircle,
    FaClock,
    FaTimesCircle,
    FaSearch
} from "react-icons/fa";

function LeaveStatus() {

    const loggedInUser =
JSON.parse(localStorage.getItem("loggedInUser"));

const allLeaves =
JSON.parse(localStorage.getItem("leaveRequests")) || [];

const leaves =
allLeaves.filter(
    leave => leave.userEmail === loggedInUser.email
);

    const approved =
        leaves.filter(
            (leave) => leave.status === "Approved"
        ).length;

    const pending =
        leaves.filter(
            (leave) => leave.status === "Pending"
        ).length;

    const rejected =
        leaves.filter(
            (leave) => leave.status === "Rejected"
        ).length;

    return (

        <div className="dashboard">

            <Sidebar />

            <div className="status-main">

                {/* HEADER */}

                <div className="status-header">

                    <div>

                        <h1>

                            Leave Status

                        </h1>

                        <p>

                            Track all your submitted leave requests.

                        </p>

                    </div>

                </div>

                {/* SUMMARY */}

                <div className="status-cards">

                    <div className="status-card">

                        <FaClipboardList />

                        <div>

                            <h2>{leaves.length}</h2>

                            <p>Total Requests</p>

                        </div>

                    </div>

                    <div className="status-card green">

                        <FaCheckCircle />

                        <div>

                            <h2>{approved}</h2>

                            <p>Approved</p>

                        </div>

                    </div>

                    <div className="status-card orange">

                        <FaClock />

                        <div>

                            <h2>{pending}</h2>

                            <p>Pending</p>

                        </div>

                    </div>

                    <div className="status-card red">

                        <FaTimesCircle />

                        <div>

                            <h2>{rejected}</h2>

                            <p>Rejected</p>

                        </div>

                    </div>

                </div>

                {/* SEARCH */}

                <div className="status-search">

                    <FaSearch />

                    <input
                        type="text"
                        placeholder="Search Leave Type..."
                    />

                </div>

                {/* TABLE */}

                <div className="table-card">

                    <table>

                        <thead>

                            <tr>

                                <th>ID</th>
                                <th>Leave Type</th>
                                <th>From</th>
                                <th>To</th>
                                <th>Reason</th>
                                <th>Status</th>

                            </tr>

                        </thead>

                        <tbody>

                            {

                                leaves.length === 0 ?

                                (

                                    <tr>

                                        <td
                                            colSpan="6"
                                            style={{
                                                textAlign: "center",
                                                padding: "30px"
                                            }}
                                        >

                                            No Leave Requests Found

                                        </td>

                                    </tr>

                                )

                                :

                                (

                                    [...leaves]
                                     .reverse()
                                    .map((leave, index) => (

                                        <tr key={leave.id}>

                                            <td>{index + 1}</td>

                                            <td>{leave.leaveType}</td>

                                            <td>{leave.fromDate}</td>

                                            <td>{leave.toDate}</td>

                                            <td>{leave.reason}</td>

                                            <td>

                                                <span
                                                    className={`badge ${leave.status.toLowerCase()}`}
                                                >

                                                    {leave.status}

                                                </span>

                                            </td>

                                        </tr>

                                    ))

                                )

                            }

                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    );

}

export default LeaveStatus;