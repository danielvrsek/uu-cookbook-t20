import React from "react";
import NavBar from "./NavBar";
import './MainLayout.css'

export default function MainLayout(props) {


    return (
        
        <div className="main">
            <div className="nav">

                <NavBar />
                

            </div>
            <div className="container">
                {props.children}
            </div>
        </div>
    );
}