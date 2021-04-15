import React, { Component } from 'react'
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
        <div className="container">
        <div className="col-8 inlineblock">
              <span className={styleLi} 
              onClick={ onToggleDone }>
                  { label }
              </span>
          </div>
        <div className="col-4 inlineblock rightButtons">
          <span>              
             <button type='button' 
             className="btn btn-outline-danger"
             onClick = { onDeleted } > 
                  <i className="fa fa-trash-o"></i></button>
             <button type='button' className="btn btn-outline-success button2" 
                onClick = { onToggleImportant } >
                  <i className="fa fa-exclamation"></i>
              </button>              
          </span>
        </div>
      </div>
        )
    }
}


