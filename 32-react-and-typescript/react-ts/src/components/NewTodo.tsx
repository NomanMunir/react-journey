import React, { useRef } from "react";

import classes from "./NewTodo.module.css"

const NewTodo: React.FC<{onAddTodo: (text:string)=> void }> = ({onAddTodo})=>{
    const todoInput = useRef<HTMLInputElement>(null);

    function submitHandler(event: React.FormEvent) {
        event.preventDefault();
        const inputValue = todoInput.current!.value
        if (inputValue.trim().length === 0)
            return;
        onAddTodo(inputValue);
        todoInput.current!.value = "";
    }

    return (<form onSubmit={submitHandler} className={classes.form}>
        <label htmlFor="text">Type Text</label>
        <input type="text" id="text" ref={todoInput} />
        <button>Add Todo</button>
    </form>)
}

export default NewTodo;