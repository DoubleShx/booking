import React, { Component } from 'react'
import './item-add-form.css'


export default class ItemAddForm extends Component {
    
    render() {
        const { onAddFunction, adding, addingChange } = this.props;
        return(
                <div className="input-group mb-3 itemAddForm">
                <form onSubmit = {(event) => onAddFunction(event, adding) } >
                <input type="text" className="form-control" placeholder="add new work" value = { adding } onChange = { addingChange } />
                <button className="btn btn-primary" type="submit">Button</button>
                </form>
                </div>
        )
    }
}