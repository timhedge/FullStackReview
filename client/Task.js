import React from "react";

const Task = props => (
  <div key={`task_${props.id}`}>
    <span>{props.task}</span>
    <button value={props.id} onClick={props.deleteTask}>
      Complete
    </button>
  </div>
);

export default Task;
