import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import AddEmployee from "./components/AddEmployee";
import EmployeeList from "./components/EmployeeList";
import LeaveStatus from "./components/LeaveStatus";
import ApplyLeave from "./components/ApplyLeave";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";
import { useEffect } from "react";
import PendingRequests from "./components/PendingRequests";
import HRResources from "./components/HRResources";

function ProtectedRoute({ children }) {

    const isLoggedIn = localStorage.getItem("isLoggedIn");

    return isLoggedIn ? children : <Navigate to="/login" />;

}

function App() {

    useEffect(() => {

    const savedSettings = JSON.parse(
        localStorage.getItem("settings")
    );

    if (savedSettings?.darkMode) {

        document.body.classList.add("dark-mode");

    } else {

        document.body.classList.remove("dark-mode");

    }

}, []);

    return (

        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/login" element={<Login />} />

                <Route path="/register" element={<Register />} />

                <Route

                    path="/dashboard"

                    element={

                        <ProtectedRoute>

                            <Dashboard />

                        </ProtectedRoute>

                    }

                />

                <Route

    path="/admin/add-employee"

    element={<AddEmployee />}
    
/>

                <Route 

                          path="/admin/employees"

                        element={<EmployeeList />}

                />

                <Route

                    path="/leave"

                    element={

                        <ProtectedRoute>

                            <ApplyLeave />

                        </ProtectedRoute>

                    }

                />

                <Route

                    path="/status"

                    element={

                        <ProtectedRoute>

                            <LeaveStatus />

                        </ProtectedRoute>

                    }

                />
                <Route

    path="/profile"

    element={

        <ProtectedRoute>

            <Profile />

        </ProtectedRoute>

    }

/>
<Route

    path="/settings"

    element={

        <ProtectedRoute>

            <Settings />

        </ProtectedRoute>

    }

/>

<Route

    path="/admin-login"

    element={<AdminLogin />}

/>

<Route
    path="/admin-dashboard"

    element={<AdminDashboard />}

/>

<Route
    path="/admin/pending-requests"
    element={
        <ProtectedRoute>
            <PendingRequests />
        </ProtectedRoute>
    }
/>

<Route
  path="/hr-resources"
  element={<HRResources />}
/>

            </Routes>

        </BrowserRouter>

    );

}

export default App;