import { useRef, useState } from "react";
import Modal from "./Modal";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");
  const modal = useRef();

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === "") {
      modal.current.open();
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-500 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Please make sure you provide the correct infe.
        </p>
      </Modal>
      <div className="flex items-center gap-4">
        <input
          type="text"
          value={enteredTask}
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
          onChange={(e) => handleChange(e)}
        />
        <button
          className="text-stone-700 hover:text-red-500"
          onClick={handleClick}
        >
          Add Task
        </button>
      </div>
    </>
  );
}
