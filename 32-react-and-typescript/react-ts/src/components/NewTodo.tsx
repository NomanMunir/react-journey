import React, { useRef, useContext } from "react";
import TodoContext from "./store/todo-context";
import classes from "./NewTodo.module.css"

const NewTodo: React.FC = () => {
    const todoCtx = useContext(TodoContext);
    const todoInput = useRef<HTMLInputElement>(null);

    function submitHandler(event: React.FormEvent) {
        event.preventDefault();
        const inputValue = todoInput.current!.value
        if (inputValue.trim().length === 0)
            return;
        todoCtx.addItem(inputValue);
        todoInput.current!.value = "";
    }

    return (<form onSubmit={submitHandler} className={classes.form}>
        <label htmlFor="text">Type Text</label>
        <input type="text" id="text" ref={todoInput} />
        <button>Add Todo</button>
    </form>)
}

export default NewTodo;