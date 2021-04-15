import React, { Component } from 'react'
import ReactDom from 'react-dom'
import AppHeader from './components/appHeader/app-header';
import TodoList from './components/todoList/todo-list';
import SearchPanel from './components/searchPanel/search-panel'
import "./index.css"

import ItemAddForm from './components/itemAddForm/item-add-form';



class App extends Component {
  state = {
    todos: [
      { label: "Drink Coffee", important: false, done: false, id: 1 },
      { label: "Make Awesome App", important: true, done: false, id: 2 },
      { label: "Have a Lunch", important: false, done: false, id: 3}
    ],
    adding: '',
    test: true,
    search: '',
    activeTodos: '',
  }
  
  
  onDeleted = (id) => {
    this.setState(({todos}) => {
      const idx = todos.findIndex((el) => el.id === id );
      console.log('idx: ' + idx)
      const before = todos.slice(0, idx);
      const after = todos.slice(idx+1)
      const newArray = [...before, ...after]
      console.log(newArray)
      return {
        todos: newArray
      }
    })    
  }
  onAddFunction = (event, adding2) => {
    const ids = this.state.todos.map(el =>  el.id);
    const  maximumId = Math.max.apply(null, ids) + 1;
    this.setState(({todos}) => {
      const newTodo = [...todos, { label: adding2, important: false, done: false, id: maximumId}]
      return {
        todos: newTodo,
        adding: ''
      }
    })   
  }
  addingChange = (editing) => {
    if (editing)
    this.setState({
        adding: editing
    }) 
  };
  toggleProperty(arr, id, param) {    
      let idx = arr.findIndex((el) => el.id === id);
      let newDone = arr[idx];
      const doneEl = { ...newDone, [param]: !newDone[param]}
      return [
        ...arr.slice(0, idx),
        doneEl,
        ...arr.slice(idx+1)
      ]
     }
  

  onToggleDone = (id) => {
    this.setState(({todos})=> {
     return {
       todos: this.toggleProperty(todos, id, 'done')
     }
    })
  };
  onToggleImportant = (id) => {
    this.setState(({todos})=> {
     return {
       todos: this.toggleProperty(todos, id, 'important')
     }
    })
  };

  searchChange = (event) => {
    this.setState({
      search: event.target.value
    })
  };
  activeButton = (param) => {
    this.setState({
      activeTodos: param.toString(),
      search: ''
    })
    console.log(param)
  }

  render() {
      const doneCount = this.state.todos
                        .filter(el => el.done).length;
      const addCount = this.state.todos.length
      return ( 
            <div className="fluid">
              <div className="containerMain">
              <AppHeader header="Todo List" 
              doneCount = { doneCount } 
              addCount = { addCount } 
              />
              <SearchPanel search = { this.state.search } searchChange = { this.searchChange } 
              activeButton = { this.activeButton } 
              />
              <TodoList 
              todos = { this.state.todos } 
              onDeleted = { this.onDeleted }
              onToggleDone = { this.onToggleDone } 
              onToggleImportant = { this.onToggleImportant }
              done = { this.state.done }
              important = { this.state.important }
              search = { this.state.search }
              activeTodos = { this.state.activeTodos }
              />
              <ItemAddForm 
              onAddFunction = { this.onAddFunction } 
              adding = { this.state.adding } 
              addingChange = { this.addingChange } 
              />
              <button onClick={()=> console.log(this.state)}>dsa</button>
              </div>
            </div>
      )
      }
  };

ReactDom.render(<App/>, document.getElementById('root'))


