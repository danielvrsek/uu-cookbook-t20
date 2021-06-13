import React, { Component } from 'react';
import Select from '../common/forms/Select';
import TextInput from '../common/forms/TextInput';

export default class Tagger extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: this.props.items[0],
            items: []
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.getDefaultItem = this.getDefaultItem.bind(this);
        this.getRemainingItems = this.getRemainingItems.bind(this);
    }

    getDefaultItem() {
        return this.getRemainingItems()[0];
    }

    getRemainingItems() {
        return this.props.items.filter(e => !this.state.items.map(x => x.key).includes(e.key));
    }

    handleClick(item) {
        let items = this.state.items.map(x => x.key).filter(x => x !== item.key);

        this.setState({
            ...this.state,
            input: this.props.items.filter(e => !items.includes(e.key))[0],
            items: this.state.items.filter(x => x.key !== item.key)
        });

        this.props.onChange(this.state.items);
    }

    handleInputChange(value) {
        this.setState({
            ...this.setState,
            input: value
        })
    }

    handleSubmit() {
        if (!this.state.input) {
            return;
        }

        this.setState({
            ...this.state,
            input: this.getRemainingItems().filter(e => this.state.input.key !== e.key)[0],
            items: [ ...this.state.items, this.state.input]
        });

        this.props.onChange(this.state.items);
    }

    render() {
        let selector;
        if (this.props.items) {
            let items = this.getRemainingItems();
            let defaultItem = this.getDefaultItem();

            let disabled = items.length === 0;
            selector = <>
                <label className="text-secondary">
                    {this.props.label}:
                </label>
                <Select data={items} selectedItem={defaultItem} onChange={this.handleInputChange} />
                <button disabled={disabled} className="btn btn-secondary" type="button" onClick={this.handleSubmit}>Přidat</button>
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
                <div className="container">
                    <div className="row row-cols-3">
                        {this.state.items.map(item => <Tag key={item.key} item={item} onClick={this.handleClick} />)}
                    </div>
                </div>
            </>
        );
    }
}

var Tag = ({item, onClick}) => {
    let handleClick = () => onClick(item);
    return (
        <>
            <div className="col">
                <a href="#" className="list-group-item list-group-item-action" onClick={handleClick}>{item.value}</a>
            </div>
        </>
    )
}