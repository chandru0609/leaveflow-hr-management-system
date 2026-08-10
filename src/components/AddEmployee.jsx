import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import "../css/AddEmployee.css";

function AddEmployee() {

    const navigate = useNavigate();

    const [employee, setEmployee] = useState({

        fullName: "",

        employeeId: "",

        department: "",

        designation: "",

        email: "",

        phone: "",

        password: ""

    });

    function handleChange(e){

        setEmployee({

            ...employee,

            [e.target.name]: e.target.value

        });

    }

    function handleSubmit(e){

        e.preventDefault();

        const employees =

            JSON.parse(localStorage.getItem("employees")) || [];

        employees.push(employee);

        localStorage.setItem(

            "employees",

            JSON.stringify(employees)

        );

        navigate("/employees");

    }

    return(

        <div className="dashboard">

            <Sidebar />

            <div className="addemployee-main">

                <div className="page-header">

                    <h1>

                        Add Employee

                    </h1>

                    <p>

                        Register a new employee into LeaveFlow.

                    </p>

                </div>

                <div className="employee-card">

                    <form onSubmit={handleSubmit}>

                        <div className="form-grid">

                            <div className="form-group">

                                <label>

                                    Full Name

                                </label>

                                <input

                                    type="text"

                                    name="fullName"

                                    value={employee.fullName}

                                    onChange={handleChange}

                                    required

                                />

                            </div>

                            <div className="form-group">

                                <label>

                                    Employee ID

                                </label>

                                <input

                                    type="text"

                                    name="employeeId"

                                    value={employee.employeeId}

                                    onChange={handleChange}

                                    required

                                />

                            </div>

                            <div className="form-group">

                                <label>

                                    Department

                                </label>

                                <input

                                    type="text"

                                    name="department"

                                    value={employee.department}

                                    onChange={handleChange}

                                    required

                                />

                            </div>

                            <div className="form-group">

                                <label>

                                    Designation

                                </label>

                                <input

                                    type="text"

                                    name="designation"

                                    value={employee.designation}

                                    onChange={handleChange}

                                    required

                                />

                            </div>

                            <div className="form-group">

                                <label>

                                    Email

                                </label>

                                <input

                                    type="email"

                                    name="email"

                                    value={employee.email}

                                    onChange={handleChange}

                                    required

                                />

                            </div>

                            <div className="form-group">

                                <label>

                                    Phone Number

                                </label>

                                <input

                                    type="tel"

                                    name="phone"

                                    value={employee.phone}

                                    onChange={handleChange}

                                    required

                                />

                            </div>

                            <div className="form-group full-width">

                                <label>

                                    Password

                                </label>

                                <input

                                    type="password"

                                    name="password"

                                    value={employee.password}

                                    onChange={handleChange}

                                    required

                                />

                            </div>

                        </div>

                        <div className="button-group">

                            <button

                                type="submit"

                                className="save-btn"

                            >

                                Add Employee

                            </button>

                            <button

                                type="button"

                                className="cancel-btn"

                                onClick={() => navigate("/employees")}

                            >

                                Cancel

                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </div>

    );

}

export default AddEmployee;