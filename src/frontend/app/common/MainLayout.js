import React from "react";
import NavBar from "./NavBar";

export default function MainLayout(props) {
    return (
        <div className="main">
            <div className="nav">
                <NavBar />
            </div>
            <div className="content">
                {props.children}
            </div>
        </div>
    );
}