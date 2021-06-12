import React, { Component } from 'react';
import Select from '../common/forms/Select';
import TextInput from '../common/forms/TextInput';

export default class Tagger extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: "",
            items: []
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleClick(item) {
        this.setState({
            ...this.state,
            items: this.state.items.filter(x => x !== item)
        });
    }

    handleInputChange(value) {
        this.setState({
            ...this.setState,
            input: value
        })
    }

    handleSubmit() {
        if (this.state.input === "") {
            return;
        }

        this.setState({
            ...this.state,
            input: "",
            items: [ ...this.state.items, this.state.input]
        });
    }

    render() {
        let selector;
        if (this.props.items) {
            let items = this.props.items.filter(e => !this.state.items.includes(e.value));
            if (this.state.input === "") {
                items = [ "", ...items ];
            }

            selector = <>
                <label>
                    {this.props.label}:
                </label>
                <Select data={items} onChange={this.handleInputChange} />
                <button disabled={items.length === 0 || this.state.input == ""} className="btn btn-secondary" type="button" onClick={this.handleSubmit}>Přidat</button>
            </>
        } else {
            const handleKeyDown = (event) => {
                if (event.key === 'Enter') {
                    console.log("enter");
                    this.handleSubmit();
                }
            }

            selector = <TextInput name="itemName" value={this.state.input} label={this.props.label} onChange={(name, value) => this.handleInputChange(value)} onKeyDown={handleKeyDown} />;
        }

        return (
            <>
                <div className="input-group mb-3">
                    {selector}
                </div>
                <div class="container">
                    <div class="row row-cols-3">
                        {this.state.items.map(item => <Tag key={item} value={item} onClick={this.handleClick} />)}
                    </div>
                </div>
            </>
        );
    }
}

var Tag = ({value, onClick}) => {
    let handleClick = () => onClick(value);
    return (
        <>
            <div class="col">
                <a href="#" className="list-group-item list-group-item-action" onClick={handleClick}>{value}</a>
            </div>
        </>
    )
}