import React from 'react';
import axios from 'axios';
import Task from './Task.js'

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: '',
            todos: []
        }
        this.enterItem = this.enterItem.bind(this);
    }

    enterItem(event) {
        let newItem = event.target.value;
        this.setState({
          item: newItem
      });
    }

    addItem() {
        let todoItem = this.state.item;
        axios.post('/addTask', {
            task: todoItem
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    componentDidMount() {
      // get grocery items  
        axios.get('/tasks')
        .then((response) => {
            let todoItems = response.data;
            this.setState({
                todos: todoItems // post request obj body values
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
            <input onChange={this.enterItem}></input>
            <button>Add Task</button>
            <Task tasks={this.state.todos}/>
        </div>
        )
    }
}
