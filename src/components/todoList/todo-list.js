import React from 'react'
import TodoListItem from './todoListItem/todo-list-item'
import { List } from 'antd';
import './todo-list.css'


const TodoList = ({ todos, onDeleted, onToggleDone, onToggleImportant, done, important, search = false, activeTodos = 'all' }) => {
    let newTodos = [];
    if (!!search) { newTodos = todos.filter(el=> el.label.toUpperCase().includes(search.toUpperCase())) }
    else { newTodos = todos };
    if (activeTodos === 'done') { newTodos = todos.filter(el => el.done)}
    else if (activeTodos === 'active') { newTodos = todos.filter(el => !el.done)}
    
    
    const elements = newTodos.map((item) => {
       const { id, ...itemProps } = item
    return (        
            <TodoListItem className="list-group-item" key={id}
            {...itemProps} 
            onDeleted = { () => onDeleted(id) } 
            onToggleDone = { () => onToggleDone(id) } 
            onToggleImportant = { () => onToggleImportant(id) } />
    )
   })


    return (
        <div className="todoList">
        <List className="list-group">
            {elements}
        </List>
        </div>
    )
}
export default TodoList;