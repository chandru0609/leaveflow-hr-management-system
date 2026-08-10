import { Link } from "react-router-dom";
import "../css/Home.css";

import {
    FaArrowRight,
    FaCheckCircle,
    FaUsers,
    FaCalendarAlt,
    FaChartLine,
    FaPlayCircle,
    FaShieldAlt
} from "react-icons/fa";

function Home(){

return(

<div className="home">

{/* ================= NAVBAR ================= */}

<nav className="navbar">

    <div className="logo">

        <span className="logo-icon">

            LF

        </span>

        <div>

            <h2>

                LeaveFlow

            </h2>

            <span>

                HR Management Suite

            </span>

        </div>

    </div>

    <ul className="nav-links">

        <li>

            <a href="#features">

                Features

            </a>

        </li>

        <li>

            <a href="#solutions">

                Solutions

            </a>

        </li>

        <li>

            <a href="#pricing">

                Pricing

            </a>

        </li>

        <li>

            <a href="#contact">

                Contact

            </a>

        </li>

    </ul>

    <div className="nav-buttons">

        <Link
            to="/login"
            className="login-btn"
        >
            Employee Login
        </Link>

        <Link
            to="/admin-login"
            className="admin-btn"
        >
            Admin Login
        </Link>

        <Link
            to="/register"
            className="register-btn"
        >
            Register
        </Link>

    </div>

</nav>


{/* ================= HERO ================= */}

<section className="hero">

    <div className="hero-left">

        <span className="hero-badge">

            🚀 Trusted by 500+ Companies

        </span>

        <h1>

            Smarter Leave

            Management

            For Modern

            Organizations

        </h1>

        <p>

            LeaveFlow simplifies leave management with
            automated approvals, intelligent reporting,
            employee self-service and real-time workforce
            analytics — all from one beautifully designed
            cloud platform.

        </p>

        <div className="hero-buttons">

            <Link

                to="/register"

                className="primary-btn"

            >

                Start Free Trial

                <FaArrowRight/>

            </Link>

        </div>

        <div className="hero-highlights">

            <div>

                <FaCheckCircle/>

                One Click Approval

            </div>

            <div>

                <FaShieldAlt/>

                Enterprise Security

            </div>

            <div>

                <FaChartLine/>

                Smart Analytics

            </div>

        </div>

    </div>

    <div className="hero-right">

        <div className="dashboard-preview">

            <div className="preview-header">

                LeaveFlow Dashboard

            </div>

            <div className="preview-card">

                <FaUsers/>

                <h3>

                    254

                </h3>

                <p>

                    Employees

                </p>

            </div>

            <div className="preview-card">

                <FaCalendarAlt/>

                <h3>

                    28

                </h3>

                <p>

                    Pending Leaves

                </p>

            </div>

            <div className="preview-card">

                <FaChartLine/>

                <h3>

                    98%

                </h3>

                <p>

                    Approval Rate

                </p>

            </div>

            <div className="preview-card premium">

                <h4>

                    Productivity

                </h4>

                <h2>

                    +32%

                </h2>

                <span>

                    Compared to last month

                </span>

            </div>

        </div>

    </div>

</section>


{/* ================= COMPANY STATS ================= */}

<section className="stats-section">

    <div className="stat-box">

        <h2>500+</h2>

        <p>Companies Trust LeaveFlow</p>

    </div>

    <div className="stat-box">

        <h2>25K+</h2>

        <p>Employees Managed</p>

    </div>

    <div className="stat-box">

        <h2>99.99%</h2>

        <p>Cloud Uptime</p>

    </div>

    <div className="stat-box">

        <h2>24/7</h2>

        <p>Dedicated Support</p>

    </div>

</section>


{/* ================= TRUSTED ================= */}

<section className="trusted-section">

    <span>

        TRUSTED BY LEADING ORGANIZATIONS

    </span>

    <div className="trusted-logos">

        <div>TechNova</div>

        <div>CloudNest</div>

        <div>NextGen</div>

        <div>InnovaSoft</div>

        <div>FutureLabs</div>

        <div>SkyTech</div>

    </div>

</section>


{/* ================= FEATURES ================= */}

<section

    id="features"

    className="features-section"

>

    <div className="section-title">

        <span>

            WHY LEAVEFLOW

        </span>

        <h2>

            Everything HR Needs In One Platform

        </h2>

        <p>

            Built for modern businesses to automate HR,
            simplify employee leave management and improve
            organizational productivity.

        </p>

    </div>

    <div className="feature-grid">

        <div className="feature-card">

            <FaCalendarAlt className="feature-icon"/>

            <h3>

                Smart Leave Management

            </h3>

            <p>

                Employees can apply leave in seconds while
                managers approve instantly with automated workflows.

            </p>

        </div>

        <div className="feature-card">

            <FaUsers className="feature-icon"/>

            <h3>

                Employee Directory

            </h3>

            <p>

                Manage employee records, departments,
                designations and profiles from one secure platform.

            </p>

        </div>

        <div className="feature-card">

            <FaChartLine className="feature-icon"/>

            <h3>

                Analytics Dashboard

            </h3>

            <p>

                Interactive charts and real-time reports
                help HR make faster decisions.

            </p>

        </div>

        <div className="feature-card">

            <FaCheckCircle className="feature-icon"/>

            <h3>

                Approval Workflow

            </h3>

            <p>

                Multi-level approvals with notifications,
                reminders and instant status updates.

            </p>

        </div>

        <div className="feature-card">

            <FaShieldAlt className="feature-icon"/>

            <h3>

                Enterprise Security

            </h3>

            <p>

                Secure authentication and role-based access
                ensure complete employee data protection.

            </p>

        </div>

        <div className="feature-card">

            <FaCalendarAlt className="feature-icon"/>

            <h3>

                Company Calendar

            </h3>

            <p>

                Holidays, leave schedules,
                birthdays and events
                managed from one calendar.

            </p>

        </div>

    </div>

</section>


{/* ================= WHY CHOOSE US ================= */}

<section

    id="solutions"

    className="why-section"

>

    <div className="section-title">

        <span>

            WHY CHOOSE LEAVEFLOW

        </span>

        <h2>

            Built For Fast Growing Companies

        </h2>

        <p>

            Powerful automation, enterprise-grade security,
            intelligent dashboards and a delightful employee
            experience in one cloud platform.

        </p>

    </div>

    <div className="why-grid">

        <div className="why-card">

            <h3>

                ⚡ Lightning Fast

            </h3>

            <p>

                Leave approvals in just a few clicks.

            </p>

        </div>

        <div className="why-card">

            <h3>

                🔒 Secure Platform

            </h3>

            <p>

                Enterprise level security for every employee.

            </p>

        </div>

        <div className="why-card">

            <h3>

                📊 Real-Time Insights

            </h3>

            <p>

                Visual reports and analytics for HR teams.

            </p>

        </div>

        <div className="why-card">

            <h3>

                ☁ Cloud Based

            </h3>

            <p>

                Access LeaveFlow anytime from anywhere.

            </p>

        </div>

    </div>

</section>


{/* ================= TESTIMONIALS ================= */}

<section className="testimonial-section">

    <div className="section-title">

        <span>

            CUSTOMER STORIES

        </span>

        <h2>

            Trusted By HR Teams Worldwide

        </h2>

        <p>

            Thousands of organizations rely on LeaveFlow
            every day to simplify employee leave management.

        </p>

    </div>

    <div className="testimonial-grid">

        <div className="testimonial-card">

            <div className="stars">

                ⭐⭐⭐⭐⭐

            </div>

            <p>

                "LeaveFlow completely transformed our HR
                operations. The approval workflow is incredibly
                smooth and our employees love the experience."

            </p>

            <h4>

                Priya Sharma

            </h4>

            <span>

                HR Manager • TechNova

            </span>

        </div>

        <div className="testimonial-card">

            <div className="stars">

                ⭐⭐⭐⭐⭐

            </div>

            <p>

                "One of the best HR platforms we've used.
                Clean interface, fast performance and
                excellent reporting capabilities."

            </p>

            <h4>

                Arun Kumar

            </h4>

            <span>

                Operations Head • FutureLabs

            </span>

        </div>

        <div className="testimonial-card">

            <div className="stars">

                ⭐⭐⭐⭐⭐

            </div>

            <p>

                "Managing employee leave has become effortless.
                Our HR productivity has improved tremendously."

            </p>

            <h4>

                John David

            </h4>

            <span>

                CEO • CloudNest

            </span>

        </div>

    </div>

</section>


{/* ================= CTA ================= */}

<section

    id="pricing"

    className="cta-section"

>

    <span>

        READY TO GET STARTED?

    </span>

    <h2>

        Build A Smarter Workplace With LeaveFlow

    </h2>

    <p>

        Join hundreds of businesses already simplifying
        leave management with our modern HR platform.

    </p>

    <div className="hero-buttons">

        <Link

            to="/register"

            className="primary-btn"

        >

            Start Free Trial

            <FaArrowRight/>

        </Link>

        <Link

            to="/login"

            className="secondary-btn"

        >

            Employee Login

        </Link>

    </div>

</section>


{/* ================= FOOTER ================= */}

<footer

    id="contact"

    className="footer"

>

    <div className="footer-grid">

        <div>

            <h2>

                LeaveFlow

            </h2>

            <p>

                A modern HR Management platform designed
                to simplify leave approvals, employee
                management and workforce productivity.

            </p>

        </div>

        <div>

            <h3>

                Product

            </h3>

            <ul>

                <li>Dashboard</li>

                <li>Employee Management</li>

                <li>Leave Tracking</li>

                <li>Analytics</li>

            </ul>

        </div>

        <div>

            <h3>

                Resources

            </h3>

            <ul>

                <li>Documentation</li>

                <li>Support</li>

                <li>FAQs</li>

                <li>Privacy Policy</li>

            </ul>

        </div>

        <div>

            <h3>

                Contact

            </h3>

            <ul>

                <li>support@leaveflow.com</li>

                <li>+91 9876543210</li>

                <li>Chennai, India</li>

            </ul>

        </div>

    </div>

    <div className="footer-bottom">

        © 2026 LeaveFlow • All Rights Reserved.

    </div>

</footer>

</div>

);

}

export default Home;