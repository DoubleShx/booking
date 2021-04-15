import React from 'react'
import './app-header.css'

const AppHeader = ({header, doneCount, addCount}) => {
    return (
        <span>
            <div className="col-8 inline">
            <h1> { header } </h1> 
            </div>
            <div className="col-4 inline">
            <p>{doneCount} done from {addCount}</p>
            </div>
        </span>
    )
}
export default AppHeader;