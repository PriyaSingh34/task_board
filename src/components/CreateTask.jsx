import React, { useState } from "react";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

function CreateTask({ tasks, setTasks }) {
  const [task, setTask] = useState({
    id: "",
    name: "",
    status: "todo",
  });
  // console.log(task);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.name.length < 3)
      return toast.error("A task must have more than 3 characters");

    if (task.name.length > 100)
      return toast.error("A task must not be more than a 100 characters");
    setTasks((prev) => {
      const list = [...prev, task];
      localStorage.setItem("tasks", JSON.stringify(list));
      return list;
    });
    toast.success("Task Created");
    setTask({
      id: "",
      name: "",
      status: "todo",
    });
  };
  return (
    <>
      <nav className="relative flex flex-col w-full flex-wrap items-center bg-slate-600  text lg:py-4">
        <div className="flex justify-between mt-1 w-full items-center  flex-wrap  px-3">
          <div className="ml-2">
            <a className="text-xl text-white dark:text-neutral-200" href="#">
              Welcome User
            </a>
          </div>
          <div className="mr-2 text-white hover:bg-sky-700">
          <button >LOGOUT</button>
          </div>
        </div>

        
      </nav>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task.name}
          className="border-2 border-slate-400 bg-slate-100 
        rounded-md mr-4 h-12 w-64 px-1"
          onChange={(e) =>
            setTask({ ...task, id: uuidv4(), name: e.target.value })
          }
        />
        <button className="bg-slate-500 rounded-lg px-4 h-12 text-white">
          Create
        </button>
      </form>
    </>
  );
}

export default CreateTask;
