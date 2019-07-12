import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [createTodo, setCreateTodo] = useState("");
  console.log(createTodo);
  function addTodo() {
    const _todoList = [...todoList];
    _todoList.push({ todo: createTodo, status: 0 });
    setTodoList(_todoList);
  }

  function inProgress(itemNo) {
    const _todoList = [...todoList];
    _todoList[itemNo].status = 1;
    setTodoList(_todoList);
  }

  function complete(itemNo) {
    const _todoList = [...todoList];
    _todoList[itemNo].status = 2;
    setTodoList(_todoList);
  }

  return (
    <div className="App">
      <h1>Todo App:</h1>
      <div className="create-todo">
        <label className="create-todo__item">Create a Todo:</label>
        <input
          name="create-todo-input"
          className="create-todo__item"
          type="text"
          value={createTodo}
          onChange={event => setCreateTodo(event.target.value)}
        />
        <button
          className="create-todo__item button-primary"
          onClick={() => addTodo()}
        >
          Add the Todo
        </button>
      </div>

      {todoList.map((item, index) => {
        let className =
          "todo-item__" +
          (item.status === 0
            ? "start"
            : item.status === 1
            ? "progress"
            : "complete");
        return (
          <div className="todo-item">
            <li className={className}>{item.todo}</li>
            {item.status === 0 && (
              <button
                className="button-secondary"
                onClick={() => inProgress(index)}
              >
                In Progress
              </button>
            )}
            {item.status <= 1 && (
              <button
                className="button-secondary"
                onClick={() => complete(index)}
              >
                Complete
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
