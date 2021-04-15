import React, { Component } from 'react'
import {DeleteTwoTone, PushpinTwoTone} from '@ant-design/icons'
import { Col, Row, List, Avatar, Button, Skeleton } from 'antd'

import './todo-list-item.css'


export default class TodoListItem extends Component {

    render() {
        const { label, onDeleted, onToggleDone, onToggleImportant, done, important } = this.props;
        let styleLi = 'todoListItem'        
            if (done) {
              styleLi += ' done'
            }
            if (important) {
              styleLi += ' important'
            }    
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
                 <Col>
              <h2 className={styleLi} onClick={ onToggleDone }> 
                    start
               </h2>
               </Col>
               <Col>
              <h2 className={styleLi} onClick={ onToggleDone }> 
                    end
               </h2>
               </Col>
               </Row>
               <Row>
              <h4 className={styleLi} onClick={ onToggleDone }> 
                    { label }
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


