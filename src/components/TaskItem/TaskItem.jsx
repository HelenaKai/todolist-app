import React from "react";
import { MdDelete } from "react-icons/md";
import "./TaskItem.css";

function TaskItem({ task, deleteTask, toggleCheck }) {
  return (
    <li className="items">
      <div className="items__text">
        <input
          type="checkbox"
          checked={task.checked}
          onChange={() => toggleCheck(task.taskName)}
        />
        <p className={task.checked ? "isChecked" : ""}>{task.taskName}</p>
      </div>
      <MdDelete className="icon" onClick={() => deleteTask(task.taskName)} />
    </li>
  );
}

export default TaskItem;
