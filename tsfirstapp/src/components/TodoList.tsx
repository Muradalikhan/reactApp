

import React,{FC} from 'react';

interface Props{
task:string;
deadline:number;
onClick():void
}

const TodoList=({task,deadline,onClick}:Props)=>{
  return(
    <div className='Task-List-content' >
        <div style={{flex:1}}>{task}</div>
        <div style={{flex:1}}>{deadline}</div>
        <div onClick={onClick} style={{cursor:'pointer'}}> x</div>
    </div>
  );
}

export default TodoList;
