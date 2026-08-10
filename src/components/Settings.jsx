import { useState } from "react";

import Sidebar from "./Sidebar";

import "../css/Settings.css";

function Settings() {

    const [settings, setSettings] = useState({

        notifications: true,

        emailUpdates: true

    });


    function handleToggle(e) {

        setSettings({

            ...settings,

            [e.target.name]: e.target.checked

        });

    }


    function handleSubmit(e) {

        e.preventDefault();

        alert("Settings Saved Successfully ✅");

    }


    return (

        <div className="dashboard">

            <Sidebar />

            <div className="settings-main">

                <div className="settings-header">

                    <h1>
                        Settings
                    </h1>

                    <p>
                        Manage your application preferences.
                    </p>

                </div>


                <div className="settings-card">

                    <form onSubmit={handleSubmit}>


                        {/* EMAIL NOTIFICATIONS */}

                        <div className="setting-item">

                            <div>

                                <h3>
                                    Email Notifications
                                </h3>

                                <p>
                                    Receive leave updates via email.
                                </p>

                            </div>

                            <input
                                type="checkbox"
                                name="notifications"
                                checked={settings.notifications}
                                onChange={handleToggle}
                            />

                        </div>


                        {/* WEEKLY EMAIL REPORTS */}

                        <div className="setting-item">

                            <div>

                                <h3>
                                    Weekly Email Reports
                                </h3>

                                <p>
                                    Receive HR summary reports.
                                </p>

                            </div>

                            <input
                                type="checkbox"
                                name="emailUpdates"
                                checked={settings.emailUpdates}
                                onChange={handleToggle}
                            />

                        </div>


                        {/* SAVE BUTTON */}

                        <button
                            className="save-btn"
                            type="submit"
                        >
                            Save Settings
                        </button>


                    </form>

                </div>

            </div>

        </div>

    );

}

export default Settings;