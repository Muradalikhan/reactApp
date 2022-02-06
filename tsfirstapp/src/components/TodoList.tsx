

import React,{FC} from 'react';

interface Props{
task:string;
deadline:number;
onClick():void
}

const TodoList=(props:Props)=>{
  return(
    <div className='Task-List-content' >
        <div style={{flex:1}}>{props.task}</div>
        <div style={{flex:1}}>{props.deadline}</div>
        <div onClick={props.onClick} style={{cursor:'pointer'}}> x</div>
    </div>
  );
}

export default TodoList;
