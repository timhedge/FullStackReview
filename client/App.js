import React from 'react';
import axios from 'axios';
import Task from './Task.js'

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            item: ''
        }
        this.enterItem = this.enterItem.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    enterItem(event) {
        let newItem = event.target.value;
        this.setState({
          item: newItem
      });
    }

    addItem(event) {
        event.preventDefault();
        let todoItem = this.state.item;
        axios.post('http://localhost:3000/addTask', {
            task: todoItem
        })
        .then((response) => {
            this.setState({
              todos: [...this.state.todos, { id: response.insertId, task: todoItem } ],
              item: ''
            });
        })
        .catch((error) => {
            console.log(error);
        })
    }

    componentDidMount() {
      // get grocery items  
        axios.get('http://localhost:3000/tasks')
        .then((response) => {
            let todoItems = response.data;
            this.setState({
                todos: todoItems, // post request obj body values
                item: ''
            });
          })
          .catch((error) => {
            console.log(error);
          });
    }

    render() {
        return (
        <div>
            <h1>Taskly</h1>
            <input type="text" value={this.state.item} onChange={this.enterItem}></input>
            <button onClick={this.addItem}>Add Task</button>
            <Task tasks={this.state.todos}/>
        </div>
        )
    }
}
