
import React, { useContext } from "react";
import Todo from "./models/todo";
import classes from "./TodoItem.module.css"
import TodoContext from "./store/todo-context";


const TodoItem: React.FC<{item:Todo}> = ({item})=>{

    const {removeItem} = useContext(TodoContext);
    return (<li onDoubleClick={()=>removeItem(item.id)} className={classes.item}>{item.text}</li>)
}

export default TodoItem;