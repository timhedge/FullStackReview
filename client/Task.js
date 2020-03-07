import React from 'react';

const Task = (props) => {
  return (
    <div>
      <ul>{props.tasks.map((task, index) => <li key={index}>{task.task}</li>)}</ul>
    </div>
  )
}


export default Task;
