import React from 'react'
import {Row, Col} from 'antd'

import './app-header.css'

const AppHeader = ({header, doneCount, addCount}) => {
    return (
        <>
            <Row>
            <span className="container_row">
            <div className="col-8 inline">
            <h1> { header } </h1> 
            </div>
            <div className="col-4 inline">
            <p>{doneCount} done from {addCount}</p>
            </div>
            </span>
            </Row>
            <h2>Nearest time to Booking: 18.04.2021 13:20</h2>
        </>
    )
}
export default AppHeader;