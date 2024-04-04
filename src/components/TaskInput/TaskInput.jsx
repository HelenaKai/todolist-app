import React, { useState } from "react";
import "./TaskInput.css";
import Button from "../Button/Button";

function TaskInput ({ addTask }) {
  const [task, setTask] = useState("");

  // console.log(task);

  function handleInputValue(event) {
    setTask(event.target.value);
  }

  function handleAddTask(event) {
    event.preventDefault();
    if (task.trim() === "") return;
    addTask(task);
    setTask("");
  }

  return (
    <form className="input__field" onSubmit={handleAddTask}>
      <input
        type="text"
        className="input__text"
        value={task}
        placeholder="Напиши задачу..."
        onChange={handleInputValue}
      />
      <Button text="Добавить" />
    </form>
  );
};

export default TaskInput;
