import React, {useState} from "react";
import NavBar from "./NavBar";
import LoginForm from "../components/LoginForm"

export default function MainLayout(props) {

    const [isShowLogin, setIsShowLogin] = useState(true);
    const handleLoginClick = () => {
        setIsShowLogin((isShowLogin) => !isShowLogin);
    }

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