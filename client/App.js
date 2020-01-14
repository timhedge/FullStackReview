import React from "react";
import Axios from "axios";
import Task from "./Task";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTask: "",
      tasks: []
    };
    this.deleteTask = this.deleteTask.bind(this);
    this.getTasks = this.getTasks.bind(this);
    this.sendTask = this.sendTask.bind(this);
    this.taskInput = this.taskInput.bind(this);
  }

  componentDidMount() {
    this.getTasks();
  }

  deleteTask(event) {
    const id = event.target.value;
    console.log("id from client", id);
    Axios.delete(`/todo/${id}`).then(() => {
      return this.getTasks();
    });
  }

  getTasks() {
    Axios.get("/todo").then(tasks => this.setState({ tasks: tasks.data }));
  }
  sendTask() {
    Axios.post("/todo", { task: this.state.inputTask }).then(() => {
      this.setState({ inputTask: "" });
      return this.getTasks();
    });
  }

  taskInput(event) {
    this.setState({
      inputTask: event.target.value
    });
  }
  render() {
    return (
      <div>
        <h1>Taskly</h1>
        <input value={this.state.inputTask} onChange={this.taskInput} />
        <button onClick={this.sendTask}>Add task</button>
        {this.state.tasks.map(task => {
          return (
            <Task id={task.id} task={task.task} deleteTask={this.deleteTask} />
          );
        })}
      </div>
    );
  }
}
