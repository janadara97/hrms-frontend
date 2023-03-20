import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Leave from "./pages/Leave";
import Profile from "./pages/Profile";
import SideBar from "./sideBar/SideBar";
import Login from "./pages/Login";

function Routing() {

    const [inactive, setInactive] = useState(false);

    return (
        <Router>
            {/* <SideBar onCollapse={ (inactive) => {
                setInactive(inactive);
            } } /> */}
            <div className={ `container ${inactive ? "inactive" : ""}` }>
                <Routes>
                    <Route exact path="/login" element={ <Login /> } />
                    <Route exact path="/" element={ <Dashboard /> } />
                    <Route path="/leave" element={ <Leave /> } />
                    <Route path="/profile" element={ <Profile /> } />
                </Routes>
            </div>
        </Router>
    );
}

export default Routing;