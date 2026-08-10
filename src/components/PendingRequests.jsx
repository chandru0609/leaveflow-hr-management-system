import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import "../css/PendingRequests.css";

function PendingRequests() {

    const [leaveRequests, setLeaveRequests] = useState([]);

    useEffect(() => {

        const requests =
            JSON.parse(localStorage.getItem("leaveRequests")) || [];

        setLeaveRequests(requests);

    }, []);

    function updateStatus(id, status) {

        const updatedRequests = leaveRequests.map((leave) =>

            leave.id === id
                ? { ...leave, status }
                : leave

        );

        setLeaveRequests(updatedRequests);

        localStorage.setItem(
            "leaveRequests",
            JSON.stringify(updatedRequests)
        );

    }

    function deleteRequest(id) {

        const updatedRequests =
            leaveRequests.filter((leave) => leave.id !== id);

        setLeaveRequests(updatedRequests);

        localStorage.setItem(
            "leaveRequests",
            JSON.stringify(updatedRequests)
        );

    }

    return (

        <div className="dashboard">

            <Sidebar />

            <div className="pending-main">

                <h1>Pending Leave Requests</h1>

                <table>

                    <thead>

                        <tr>

                            <th>Name</th>
                            <th>Employee ID</th>
                            <th>Department</th>
                            <th>Leave Type</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Status</th>
                            <th>Action</th>

                        </tr>

                    </thead>

                    <tbody>

                        {leaveRequests.length === 0 ? (

                            <tr>

                                <td colSpan="8">

                                    No Leave Requests Found

                                </td>

                            </tr>

                        ) : (

                            leaveRequests.map((leave) => (

                                <tr key={leave.id}>

                                    <td>{leave.employeeName}</td>

                                    <td>{leave.employeeId}</td>

                                    <td>{leave.department}</td>

                                    <td>{leave.leaveType}</td>

                                    <td>{leave.fromDate}</td>

                                    <td>{leave.toDate}</td>

                                    <td>{leave.status}</td>

                                    <td>

                                        <button
                                            onClick={() =>
                                                updateStatus(
                                                    leave.id,
                                                    "Approved"
                                                )
                                            }
                                        >

                                            Approve

                                        </button>

                                        <button
                                            onClick={() =>
                                                updateStatus(
                                                    leave.id,
                                                    "Rejected"
                                                )
                                            }
                                        >

                                            Reject

                                        </button>

                                        <button
                                            onClick={() =>
                                                deleteRequest(leave.id)
                                            }
                                        >

                                            Delete

                                        </button>

                                    </td>

                                </tr>

                            ))

                        )}

                    </tbody>

                </table>

            </div>

        </div>

    );

}

export default PendingRequests;