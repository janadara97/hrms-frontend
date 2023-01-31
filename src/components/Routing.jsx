import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Leave from "./pages/Leave";

function Routing () {
    return (
        <Router>
            <Routes>
                {/* <Route path="/" element={<Home/>}/> */}
                <Route path="/" element={<Leave/>}/>
                
            </Routes>
        </Router>
    );
}

export default Routing;