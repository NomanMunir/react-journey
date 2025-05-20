
import { useContext } from "react";
import TodoItem from "./TodoItem";
import TodoContext from "./store/todo-context";
import classes from "./Todos.module.css"

const Todos: React.FC = () => {
    const todoCtx = useContext(TodoContext);

    return (<ul className={classes.todos}>
        {todoCtx.items.map(item => <TodoItem key={item.id} item={item} />)}
    </ul>)
}

export default Todos;