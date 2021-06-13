import React from "react";
import './Forms.css';

export default function Submit(props) {
    const handleClick = (e) => {
        e.preventDefault();
    }

    return <button type="submit" className="btn btn-success form-submit" onClick={handleClick}>{props.value}</button> ;
}
