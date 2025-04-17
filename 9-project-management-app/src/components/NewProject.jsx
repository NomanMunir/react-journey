import Input from "./Input.jsx";

export default function NewProject()
{
    return ( <div>
        <menu>
            <button>Cancel</button>
            <button>Save</button>
        </menu>
        <div>
            <Input label="Title" />
            <Input label="Description" textarea />
            <Input label="Due Date" />
        </div>
    </div>)
}