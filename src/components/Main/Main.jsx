import { useState } from "react";
import "./Main.css";
import TaskInput from "../TaskInput/TaskInput";
import TaskItem from "../TaskItem/TaskItem";

function Main() {
  const [toDoList, setToDoList] = useState([]);

  const addTask = (taskName) => {
    const newTask = { taskName, checked: false };
    setToDoList([...toDoList, newTask]);
  };

  function deleteTask(deleteTaskName) {
    setToDoList(toDoList.filter((task) => task.taskName !== deleteTaskName));
  }

  function toggleCheck(taskName) {
    setToDoList((prevToDoList) =>
      prevToDoList.map((task) =>
        task.taskName === taskName ? { ...task, checked: !task.checked } : task
      )
    );
  }

  /*   console.log(toDoList); */

  return (
    <main className="main">
      <TaskInput addTask={addTask} />

      <div className="list">
        <span>Задачи:</span>
      </div>

      <ul className="list__items">
        {toDoList.map((task, key) => (
          <TaskItem
            task={task}
            key={key}
            deleteTask={deleteTask}
            toggleCheck={toggleCheck}
          />
        ))}
      </ul>
    </main>
  );
}

export default Main;
