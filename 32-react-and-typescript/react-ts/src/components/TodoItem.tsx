
import React from "react";
import Todo from "./models/todo";
import classes from "./TodoItem.module.css"


const TodoItem: React.FC<{item:Todo, onRemove: (id:string)=>void}> = ({item, onRemove})=>{

    return (<li onDoubleClick={()=>onRemove(item.id)} className={classes.item}>{item.text}</li>)
}

export default TodoItem;