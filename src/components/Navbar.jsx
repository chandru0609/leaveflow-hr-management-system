import { NavLink } from "react-router-dom";
import "../css/Navbar.css";

function Navbar() {

    return (

        <nav className="navbar">

            <h2 className="logo">

                LeaveFlow

            </h2>

            <div className="nav-links">

                <NavLink to="/">Home</NavLink>

                <NavLink to="/login">Login</NavLink>

                <NavLink to="/register">Register</NavLink>

            </div>

        </nav>

    );

}

export default Navbar;