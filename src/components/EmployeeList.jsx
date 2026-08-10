import { useState } from "react";
import Sidebar from "./Sidebar";
import "../css/EmployeeList.css";

function EmployeeList() {

    const [employees, setEmployees] = useState(

        JSON.parse(localStorage.getItem("employees")) || []

    );

    const [search, setSearch] = useState("");

    const filteredEmployees = employees.filter((employee) =>

        employee.fullName

            .toLowerCase()

            .includes(search.toLowerCase())

    );

    function deleteEmployee(index){

        const updatedEmployees = [...employees];

        updatedEmployees.splice(index,1);

        setEmployees(updatedEmployees);

        localStorage.setItem(

            "employees",

            JSON.stringify(updatedEmployees)

        );

    }

    return(

        <div className="dashboard">

            <Sidebar/>

            <div className="employee-main">

                <div className="employee-header">

                    <div>

                        <h1>

                            Employee List

                        </h1>

                        <p>

                            View and manage all employees.

                        </p>

                    </div>

                </div>

                <div className="search-box">

                    <input

                        type="text"

                        placeholder="Search Employee..."

                        value={search}

                        onChange={(e)=>setSearch(e.target.value)}

                    />

                </div>

                <div className="table-card">

                    <table>

                        <thead>

                            <tr>

                                <th>ID</th>

                                <th>Name</th>

                                <th>Department</th>

                                <th>Designation</th>

                                <th>Email</th>

                                <th>Phone</th>

                                <th>Action</th>

                            </tr>

                        </thead>

                        <tbody>

                            {

                                filteredEmployees.length === 0 ?

                                (

                                    <tr>

                                        <td

                                            colSpan="7"

                                            className="no-data"

                                        >

                                            No Employees Found

                                        </td>

                                    </tr>

                                )

                                :

                                (

                                    filteredEmployees.map(

                                        (employee,index)=>(

                                            <tr key={index}>

                                                <td>

                                                    {employee.employeeId}

                                                </td>

                                                <td>

                                                    {employee.fullName}

                                                </td>

                                                <td>

                                                    {employee.department}

                                                </td>

                                                <td>

                                                    {employee.designation}

                                                </td>

                                                <td>

                                                    {employee.email}

                                                </td>

                                                <td>

                                                    {employee.phone}

                                                </td>

                                                <td>

                                                    <button

                                                        className="edit-btn"

                                                    >

                                                        Edit

                                                    </button>

                                                    <button

                                                        className="delete-btn"

                                                        onClick={() => deleteEmployee(index)}

                                                    >

                                                        Delete

                                                    </button>

                                                </td>

                                            </tr>

                                        )

                                    )

                                )

                            }

                           </tbody>

                    </table>

                </div>

            </div>

        </div>

    );

}

export default EmployeeList;                         