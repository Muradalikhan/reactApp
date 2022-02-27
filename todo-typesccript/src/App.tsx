import { FC, ChangeEvent, useState, useEffect } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import { ITask } from "./Interface";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todolist, SetTodolist] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = {
      taskName: task,
      deadline: deadline,
    };
    SetTodolist([...todolist, newTask]);
    setTask("");
    setDeadline(0);
  };

  const deleteTask = (selectedInd: number) => {
    SetTodolist(todolist.filter((item, ind) => ind !== selectedInd));
  };

  return (
    <div className="App">
      <h1 className="title">Todo</h1>
      <div className="Header">
        <div className="Input-container">
          <input
            type="text"
            placeholder="task..."
            name="task"
            onChange={handleChange}
            className="Input"
            value={task}
          />
          <input
            type="number"
            placeholder="deadline (in Days)"
            name="deadline"
            onChange={handleChange}
            className="Input"
            value={deadline}
          />
        </div>
        <button className="btn" onClick={addTask}>
          Add Task
        </button>
      </div>
      <div className="todoList">
        {todolist.length > 0 ? (
          todolist.map((item, ind) => {
            return (
              <TodoList
                key={ind}
                task={item.taskName}
                deadline={item.deadline}
                onClick={() => deleteTask(ind)}
              />
            );
          })
        ) : (
          <div style={{ marginTop: 20, color: "lightgray" }}>
            You have no task yet
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
