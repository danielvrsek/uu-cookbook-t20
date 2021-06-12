import React, { Component } from "react";

export default class TextArea extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        
    }

    handleChange(event) {
        const target = event.target;
        this.props.onChange(target.name, target.value);
    }

    render() {
        
        return (
        
            <div className="form-floating">
                <textarea className="form-control" type="text" name={this.props.name} value={this.props.value} onChange={this.handleChange} id="floatingTextarea2" style={{height:"200px"}} />
                <label className="text-secondary" htmlFor="floatingTextarea2">Začněte psát postup... </label>
            </div>
        );
    }
}

