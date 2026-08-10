import { useState } from "react";
import Sidebar from "./Sidebar";
import "../css/ApplyLeave.css";
import SuccessModal from "./SuccessModal";

function ApplyLeave() {

    const loggedInUser =
        JSON.parse(localStorage.getItem("loggedInUser"));

    const today =
        new Date().toISOString().split("T")[0];

    const [showSuccess, setShowSuccess] =
        useState(false);

    const [leave, setLeave] = useState({

        employeeName:
            loggedInUser?.fullName || "",

        employeeId:
            loggedInUser?.employeeId || "",

        department:
            loggedInUser?.department || "",

        leaveType: "",

        fromDate: "",

        toDate: "",

        reason: ""

    });

    function handleChange(e) {

        setLeave({

            ...leave,

            [e.target.name]: e.target.value

        });

    }

    const nextDay = leave.fromDate
        ? new Date(
              new Date(leave.fromDate).getTime() +
                  24 * 60 * 60 * 1000
          )
              .toISOString()
              .split("T")[0]
        : today;

    function handleSubmit(e) {

        e.preventDefault();

        if (leave.toDate <= leave.fromDate) {

            alert("To Date must be after From Date.");

            return;

        }

        const leaveRequests =
            JSON.parse(
                localStorage.getItem("leaveRequests")
            ) || [];

        leaveRequests.push({

            id: Date.now(),

            userEmail: loggedInUser.email,

            userName: loggedInUser.fullName,

            employeeId: loggedInUser.employeeId,

            department: loggedInUser.department,

            leaveType: leave.leaveType,

            fromDate: leave.fromDate,

            toDate: leave.toDate,

            reason: leave.reason,

            appliedOn:
                new Date().toLocaleDateString(),

            status: "Pending"

        });

        localStorage.setItem(

            "leaveRequests",

            JSON.stringify(leaveRequests)

        );

        setLeave({

            employeeName:
                loggedInUser.fullName,

            employeeId:
                loggedInUser.employeeId,

            department:
                loggedInUser.department,

            leaveType: "",

            fromDate: "",

            toDate: "",

            reason: ""

        });

        setShowSuccess(true);

    }

    function handleSuccessClose() {

        setShowSuccess(false);

    }

    return (

  <>
    <SuccessModal
      show={showSuccess}
      title="Leave Request Submitted"
      message="Your leave request has been submitted successfully and is waiting for manager approval."
      onClose={handleSuccessClose}
    />

    <div className="dashboard">
      <Sidebar />

      <div className="apply-main">

        <div className="apply-header">
          <h1>Apply Leave</h1>
          <p>Submit your leave request.</p>
        </div>

        <div className="leave-overview">

          <div className="overview-card">
            <h3>Available Leaves</h3>
            <h2>12</h2>
          </div>

          <div className="overview-card">
            <h3>Pending Requests</h3>
            <h2>2</h2>
          </div>

          <div className="overview-card">
            <h3>Approved Leaves</h3>
            <h2>18</h2>
          </div>

        </div>

        <div className="apply-card">

          <form onSubmit={handleSubmit}>

            <div className="form-grid">

              <div className="form-group">
                <label>Employee Name</label>

                <input
                  type="text"
                  name="employeeName"
                  value={leave.employeeName}
                  readOnly
                />
              </div>

              <div className="form-group">
                <label>Employee ID</label>

                <input
                  type="text"
                  name="employeeId"
                  value={leave.employeeId}
                  readOnly
                />
              </div>

              <div className="form-group">
                <label>Department</label>

                <input
                  type="text"
                  name="department"
                  value={leave.department}
                  readOnly
                />
              </div>

              <div className="form-group">
                <label>Leave Type</label>

                <select
                  name="leaveType"
                  value={leave.leaveType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Leave Type</option>
                  <option value="Casual Leave">Casual Leave</option>
                  <option value="Sick Leave">Sick Leave</option>
                  <option value="Earned Leave">Earned Leave</option>
                </select>
              </div>

              <div className="form-group">
                <label>From Date</label>

                <input
                  type="date"
                  name="fromDate"
                  min={today}
                  value={leave.fromDate}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>To Date</label>

                <input
                  type="date"
                  name="toDate"
                  min={nextDay}
                  value={leave.toDate}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group full-width">
                <label>Reason</label>

                <textarea
                  name="reason"
                  value={leave.reason}
                  onChange={handleChange}
                  placeholder="Enter leave reason..."
                  required
                />
              </div>

            </div>

            <button
              type="submit"
              className="submit-btn"
            >
              Submit Leave Request
            </button>

          </form>

        </div>

        <div className="timeline-card">

          <h2>Approval Process</h2>

          <div className="timeline">

            <div className="timeline-item">

              <div className="timeline-circle active">
                1
              </div>

              <div>
                <h4>Submitted</h4>
                <p>Your request is submitted successfully.</p>
              </div>

            </div>

            <div className="timeline-item">

              <div className="timeline-circle">
                2
              </div>

              <div>
                <h4>Manager Review</h4>
                <p>Your reporting manager reviews your request.</p>
              </div>

            </div>

            <div className="timeline-item">

              <div className="timeline-circle">
                3
              </div>

              <div>
                <h4>HR Approval</h4>
                <p>HR verifies your leave balance.</p>
              </div>

            </div>

            <div className="timeline-item">

              <div className="timeline-circle">
                4
              </div>

              <div>
                <h4>Completed</h4>
                <p>Your leave request is finalized.</p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  </>
);

}

export default ApplyLeave;