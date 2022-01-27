import React, { FC, ChangeEvent, useState } from 'react';
import './App.css';
import { Person } from './components/Person';
import { User } from './components/User';
import { ITask } from './Interface';


const App: FC = () => {
  const [task, setTask] = useState<string>('')
  const [deadline, setDeadline] = useState<number>(0)
  const [todolist, SetTodolist] = useState<ITask[]>([])



  const handleChange = (event: ChangeEvent<HTMLInputElement>):void => {
    if (event.target.name === "task") {
      setTask(event.target.value)
    } else {
      setDeadline(Number(event.target.value))

    }

  }


  const addTask=():void=>{
    const newTask={
      taskName:task,
      deadline:deadline
    }
    SetTodolist([...todolist,newTask])

    console.log(todolist)
  }

  return (
    <div className="App">
      {/* <div className='Header'>
        <div className='Input-container'>
          <input type='text' placeholder='task...' name='task' onChange={handleChange}  className='Input'/>
          <input type='number' placeholder='deadline (in Days)' name='deadline' onChange={handleChange} className='Input'/>
        </div>

        <button className='btn' onClick={addTask}>Add Task</button>


      </div>
      <div className='todoList'></div> */}



      <Person name="Murad" age={24} email='murad@gamil.com' />

      <User name='Ali' age={29} isMail={true} />
    </div>
  );
}

export default App;
