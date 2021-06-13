import React from "react";

export default function Submit(props) {
    const handleClick = (e) => {
        e.preventDefault();
    }

    return <button type="submit" className="btn btn-success" onClick={handleClick}>{props.value}</button> ;
}
