import Sidebar from "./Sidebar";
import "../css/PendingLeaves.css";

function PendingLeaves() {

    const pendingLeaves = [

        {
            id:"EMP101",
            name:"Chandru",
            department:"IT",
            leaveType:"Casual Leave",
            from:"10 Aug 2026",
            to:"12 Aug 2026"
        },

        {
            id:"EMP102",
            name:"Arun",
            department:"HR",
            leaveType:"Sick Leave",
            from:"15 Aug 2026",
            to:"16 Aug 2026"
        },

        {
            id:"EMP103",
            name:"Kumar",
            department:"Finance",
            leaveType:"Earned Leave",
            from:"18 Aug 2026",
            to:"22 Aug 2026"
        }

    ];

    return(

        <div className="dashboard">

            <Sidebar/>

            <div className="pending-main">

                <div className="pending-header">

                    <h1>Pending Leave Requests</h1>

                    <p>

                        Review and approve employee leave applications.

                    </p>

                </div>

                <div className="pending-card">

                    <table>

                        <thead>

                            <tr>

                                <th>Employee ID</th>

                                <th>Name</th>

                                <th>Department</th>

                                <th>Leave Type</th>

                                <th>From</th>

                                <th>To</th>

                                <th>Action</th>

                            </tr>

                        </thead>

                        <tbody>

                            {

                                pendingLeaves.map((leave)=>(

                                    <tr key={leave.id}>

                                        <td>{leave.id}</td>

                                        <td>{leave.name}</td>

                                        <td>{leave.department}</td>

                                        <td>{leave.leaveType}</td>

                                        <td>{leave.from}</td>

                                        <td>{leave.to}</td>

                                        <td>

                                            <button className="approve-btn">

                                                Approve

                                            </button>

                                            <button className="reject-btn">

                                                Reject

                                            </button>

                                        </td>

                                    </tr>

                                ))

                            }

                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    );

}

export default PendingLeaves;