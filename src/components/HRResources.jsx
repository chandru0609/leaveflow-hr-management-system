import Sidebar from "./Sidebar";
import "../css/HRResources.css";

import {
    FaBook,
    FaFileAlt,
    FaShieldAlt,
    FaCalendarAlt,
    FaArrowLeft
} from "react-icons/fa";

function HRResources() {

    return (

        <div className="hr-resources-page">

            <Sidebar />

            <main className="hr-resources-main">

                <div className="hr-resources-header">

                    <button
                        className="back-btn"
                        onClick={() => window.history.back()}
                    >
                        <FaArrowLeft />
                        Back
                    </button>

                    <div>
                        <h1>HR Resources</h1>

                        <p>
                            Access important company policies,
                            guidelines and HR information.
                        </p>
                    </div>

                </div>

                <div className="resources-grid">

                    <div className="resource-card">

                        <div className="resource-icon">
                            <FaBuilding />
                        </div>

                        <div className="resource-content">

                            <h3>HR Resources</h3>

                            <p>
                                Access essential HR information and workplace guidelines
                                to support day-to-day employee activities.
                            </p>

                            <div className="resource-info">

                                <div>
                                    <strong>Leave Policy</strong>
                                    <span>Leave rules and approval guidelines</span>
                                </div>

                                <div>
                                    <strong>Attendance</strong>
                                    <span>Attendance and working-hour information</span>
                                </div>

                                <div>
                                    <strong>Employee Guidelines</strong>
                                    <span>General workplace policies and procedures</span>
                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="resource-card">

                        <div className="resource-icon">
                            <FaCalendarAlt />
                        </div>

                        <h3>Holiday Calendar</h3>

                        <p>
                            View company holidays and important
                            upcoming dates.
                        </p>

                        <button>
                            View Calendar
                        </button>

                    </div>

                </div>

            </main>

        </div>

    );
}

export default HRResources;