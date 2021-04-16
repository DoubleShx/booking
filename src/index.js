import React, { Component } from 'react'
import ReactDom from 'react-dom'
import AppHeader from './components/appHeader/app-header';
import TodoList from './components/todoList/todo-list';
import SearchPanel from './components/searchPanel/search-panel'
import "./index.css"

import ItemAddForm from './components/itemAddForm/item-add-form';
import { orderBy } from 'lodash';
import { format } from 'date-fns';



class App extends Component {
  state = {
    todos: [
      { label: "Drink Coffee", important: false, done: false, id: 1, timeStart: 'Tue Apr 20 2021 15:27:11', timeFinish: 'Tue Apr 20 2021 16:27:11', person: 'Antony' },
      { label: "Make Awesome App", important: true, done: false, id: 2, timeStart: 'Tue Apr 23 2021 17:27:11', timeFinish: 'Tue Apr 23 2021 18:27:11', person: "Tomy"},
      { label: "Have a Lunch", important: false, done: false, id: 3, timeStart: 'Tue Apr 21 2021 15:27:11', timeFinish: 'Tue Apr 21 2021 16:27:11', person: "Dominik"}
    ],
    adding: '',
    test: true,
    search: '',
    activeTodos: '',
    person: ''
  }
  
  componentDidMount() {
    this.setState({person: 'Andrew'})
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

  sortByDate = (todos, bookingTime_interval) => {
    return orderBy(todos, ['timeStart'], ['asc']).map(el => {return el})
  };
  newElementFindIndex = (todos, bookingTime_interval) => {    
    // todos.findIndex(el => Date(el.timeStart) < Date(bookingTime_interval[0]._d))
    todos.map(el => {console.log(Date(el.timeStart));
    console.log(Date(bookingTime_interval[0]._d))})
  }
  onAddFunction = (event, adding2, bookingTime_interval, person) => {
    const ids = this.state.todos.map(el =>  el.id);
    this.newElementFindIndex(this.state.todos, bookingTime_interval)
    console.log(bookingTime_interval)
    const  maximumId = Math.max.apply(null, ids) + 1;
    this.setState(({todos}) => {
      const newTodo = [...todos, 
        { label: adding2, important: false, done: false, person: person,
          timeStart: bookingTime_interval[0]._d, timeFinish: bookingTime_interval[1]._d, id: maximumId}]
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
              person = {this.state.person}
              />
              <button onClick={()=> console.log(this.state)}>dsa</button>
              </div>
            </div>
      )
      }
  };

ReactDom.render(<App/>, document.getElementById('root'))


