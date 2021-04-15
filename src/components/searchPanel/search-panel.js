import React, { Component } from 'react'
import './search-panel.css'

export default class SearchPanel extends Component {
    render() {
        const { search, searchChange, activeButton } = this.props;
        return (
            <div className="input-group">
                <input type="text" className="searchInput" placeholder="search" value = { search } onChange = {(event) => searchChange(event) } />
                <div className="input-group-append">
                    <button className="btn_group btn-info rounded button1" type="toggle" onClick = {() => activeButton('all') } >All</button>
                    <button className="btn_group btn-outline-secondary rounded" type="button" onClick = {() => activeButton('active') } >Active</button>
                    <button className="btn_group btn-outline-secondary rounded" type="button" onClick = {() => activeButton('done') } >Done</button>
                </div>
            </div>
        )
        }
    }   
