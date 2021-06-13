import React, { Component } from 'react';
import Select from '../common/forms/Select';
import TextInput from '../common/forms/TextInput';

export default class Tagger extends Component {
    constructor(props) {
        super(props);

        console.log(this.props.items);
        console.log(this.props.selectedItems);

        this.state = {
            input: this.props.items[0],
            items: this.props.selectedItems ?? []
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.getRemainingItems = this.getRemainingItems.bind(this);
    }

    getRemainingItems() {
        return this.props.items.filter(e => !this.state.items.map(x => x.key).includes(e.key));
    }

    handleClick(item) {
        let items = this.state.items.filter(x => x.key !== item.key);

        this.setState({
            ...this.state,
            input: item,
            items
        });

        this.props.onChange(items);
    }

    handleSelectChange(value) {
        this.setState({
            ...this.setState,
            input: value
        })
    }

    handleSubmit() {
        let items = [ ...this.state.items, this.state.input];

        this.setState({
            ...this.state,
            input: this.props.items.filter(e => !items.map(x => x.key).includes(e.key))[0],
            items
        });

        this.props.onChange(items);
    }

    render() {
        let selector;
        let items = this.getRemainingItems();

        let disabled = items.length === 0;
        selector = <>
            <label className="text-secondary">
                {this.props.label}:
            </label>
            <Select data={items} selectedItem={this.state.input} onChange={this.handleSelectChange} />
            <button disabled={disabled} className="btn btn-secondary" type="button" onClick={this.handleSubmit}>Přidat</button>
        </>

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