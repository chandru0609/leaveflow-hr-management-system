import Sidebar from "./Sidebar";
import "../css/RejectedLeaves.css";

function RejectedLeaves() {

    const rejectedLeaves = [

        {
            id:"EMP104",
            name:"Rahul",
            department:"Marketing",
            leaveType:"Casual Leave",
            from:"05 Aug 2026",
            to:"08 Aug 2026",
            reason:"Insufficient Leave Balance"
        },

        {
            id:"EMP105",
            name:"Priya",
            department:"Testing",
            leaveType:"Medical Leave",
            from:"12 Aug 2026",
            to:"15 Aug 2026",
            reason:"Project Deadline"
        },

        {
            id:"EMP106",
            name:"Arun",
            department:"HR",
            leaveType:"Earned Leave",
            from:"20 Aug 2026",
            to:"25 Aug 2026",
            reason:"Team Availability Required"
        }

    ];

    return(

        <div className="dashboard">

            <Sidebar/>

            <div className="rejected-main">

                <div className="rejected-header">

                    <h1>Rejected Leave Requests</h1>

                    <p>

                        Leave requests rejected by the administrator.

                    </p>

                </div>

                <div className="rejected-card">

                    <table>

                        <thead>

                            <tr>

                                <th>Employee ID</th>
                                <th>Name</th>
                                <th>Department</th>
                                <th>Leave Type</th>
                                <th>From</th>
                                <th>To</th>
                                <th>Reason</th>
                                <th>Status</th>

                            </tr>

                        </thead>

                        <tbody>

                            {

                                rejectedLeaves.map((leave)=>(

                                    <tr key={leave.id}>

                                        <td>{leave.id}</td>
                                        <td>{leave.name}</td>
                                        <td>{leave.department}</td>
                                        <td>{leave.leaveType}</td>
                                        <td>{leave.from}</td>
                                        <td>{leave.to}</td>
                                        <td>{leave.reason}</td>

                                        <td>

                                            <span className="rejected-status">

                                                Rejected

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

export default RejectedLeaves;