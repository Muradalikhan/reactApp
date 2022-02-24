
import React from 'react'
type ButtonType={
    style:React.CSSProperties
    handleClick:(event:React.MouseEvent<HTMLButtonElement>,id:number)=>void
}

const Button = (props:ButtonType) => {
  return (
    <button onClick={(event)=>props.handleClick(event,1)} style={props.style}>Console</button>
  )
}

export default Button