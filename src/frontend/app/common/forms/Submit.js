import React from "react";
import './Forms.css';

export default function Submit(props) {

    return <input type="submit" value={props.value} className="btn btn-success form-submit" /> ;
}
