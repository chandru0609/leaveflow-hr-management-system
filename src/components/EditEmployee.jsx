import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Sidebar from "./Sidebar";

import "../css/EditEmployee.css";

function EditEmployee(){

    const navigate = useNavigate();

    const [employee,setEmployee]=useState({

        name:"Arun Kumar",

        email:"arun@gmail.com",

        department:"IT",

        designation:"Frontend Developer",

        phone:"9876543210"

    });

    function handleChange(e){

        setEmployee({

            ...employee,

            [e.target.name]:e.target.value

        });

    }

    function handleSubmit(e){

        e.preventDefault();

        alert("Employee Updated Successfully ✅");

        navigate("/employees");

    }

    return(

        <div className="dashboard">

            <Sidebar/>

            <div className="edit-main">

                <div className="edit-header">

                    <h1>

                        Edit Employee

                    </h1>

                    <p>

                        Update employee information.

                    </p>

                </div>

                <div className="edit-card">

                    <form onSubmit={handleSubmit}>

                                        <div className="form-grid">

                            <div className="form-group">

                                <label>

                                    Employee Name

                                </label>

                                <input

                                    type="text"

                                    name="name"

                                    value={employee.name}

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

                                    Department

                                </label>

                                <input

                                    type="text"

                                    name="department"

                                    value={employee.department}

                                    onChange={handleChange}

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

                                />

                            </div>

                            <div className="form-group full-width">

                                <label>

                                    Phone Number

                                </label>

                                <input

                                    type="text"

                                    name="phone"

                                    value={employee.phone}

                                    onChange={handleChange}

                                />

                            </div>

                        </div>

                                        <button

                            className="update-btn"

                            type="submit"

                        >

                            Update Employee

                        </button>

                    </form>

                </div>

            </div>

        </div>

    );

}

export default EditEmployee;