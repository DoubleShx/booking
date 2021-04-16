import React, { Component } from 'react'
import {DeleteTwoTone, PushpinTwoTone} from '@ant-design/icons'
import { Col, Row, List, Avatar} from 'antd'

import './todo-list-item.css'
import { format } from 'date-fns';


export default class TodoListItem extends Component {

    render() {
        const { label, onDeleted, onToggleDone, onToggleImportant, done, important, timeFinish, timeStart, person } = this.props;
        let styleLi = 'todoListItem'        
            if (done) {
              styleLi += ' done'
            }
            if (important) {
              styleLi += ' important'
            }   
            console.log(timeFinish>timeStart)
       
        const start = format(new Date(timeStart), 'dd MMM HH:mm');
        const finish = format(new Date(timeFinish), 'dd MMM HH:mm')
        return (

          <List.Item> 
              <Col span={3}>    
              <List.Item.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
              />
              </Col> 
              <Col span={10}>
              <div>
                <Row>
              <h1 className={styleLi} onClick={ onToggleDone }> 
                    { label }
               </h1>
               </Row>
               <Row>
                  <div className="timeViewer"><h4 className={styleLi}>{start}</h4></div>
                </Row>
                <Row>
                  <div className="timeViewer"><h4 className={styleLi}>{finish}</h4></div>
                </Row>
               <Row>
              <h4 className={styleLi} onClick={ onToggleDone }> 
                    { person }
               </h4>
               </Row>
               </div>
               </Col> 
          <span>              
             <button type='button' 
             className="btn btn-outline-danger"
             onClick = { onDeleted } > 
                  <DeleteTwoTone />
              </button>
             <button type='button' className="btn btn-outline-success button2" 
                onClick = { onToggleImportant } >
                  <PushpinTwoTone />
              </button>              
          </span>    
     
            </List.Item>   
        )
    }
}


