import Sidebar from "./Sidebar";
import "../css/ApprovedLeaves.css";

function ApprovedLeaves() {

    const approvedLeaves = [

        {
            id:"EMP101",
            name:"Chandru",
            department:"IT",
            leaveType:"Casual Leave",
            from:"10 Aug 2026",
            to:"12 Aug 2026",
            approvedBy:"HR Manager"
        },

        {
            id:"EMP102",
            name:"Arun",
            department:"HR",
            leaveType:"Medical Leave",
            from:"18 Aug 2026",
            to:"20 Aug 2026",
            approvedBy:"Admin"
        },

        {
            id:"EMP103",
            name:"Kumar",
            department:"Finance",
            leaveType:"Earned Leave",
            from:"25 Aug 2026",
            to:"27 Aug 2026",
            approvedBy:"HR Manager"
        }

    ];

    return(

        <div className="dashboard">

            <Sidebar/>

            <div className="approved-main">

                <div className="approved-header">

                    <h1>Approved Leaves</h1>

                    <p>

                        Successfully approved employee leave requests.

                    </p>

                </div>

                <div className="approved-card">

                    <table>

                        <thead>

                            <tr>

                                <th>Employee ID</th>

                                <th>Name</th>

                                <th>Department</th>

                                <th>Leave Type</th>

                                <th>From</th>

                                <th>To</th>

                                <th>Approved By</th>

                                <th>Status</th>

                            </tr>

                        </thead>

                        <tbody>

                            {

                                approvedLeaves.map((leave)=>(

                                    <tr key={leave.id}>

                                        <td>{leave.id}</td>

                                        <td>{leave.name}</td>

                                        <td>{leave.department}</td>

                                        <td>{leave.leaveType}</td>

                                        <td>{leave.from}</td>

                                        <td>{leave.to}</td>

                                        <td>{leave.approvedBy}</td>

                                        <td>

                                            <span className="approved-status">

                                                Approved

                                            </span>

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

export default ApprovedLeaves;