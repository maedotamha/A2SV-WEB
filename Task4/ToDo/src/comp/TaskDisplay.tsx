import { useState } from "react";
import { Task } from "../types/TaskType";

interface props {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (task: Task) => void;
  onToggleDone: (task: Task) => void;
}

const TaskDisplay = ({ task, onEdit, onDelete, onToggleDone }: props) => {
  const [showSub, setShowSub] = useState(false);

  return (
    <div
      className={`p-4 rounded-xl shadow-md border flex flex-col gap-2 ${
        task.done
          ? "text-gray-400 bg-green-50 border-green-300"
          : "text-gray-800 bg-white border-blue-200"
      }`}
    >
      {/* Checkbox  Task Name  Category  edit Delete */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={task.done}
            onChange={() => onToggleDone(task)}
            className="h-5 w-5 accent-green-600"
          />
          <h3
            className={`text-xl font-semibold ${
              task.done ? "line-through" : "text-blue-700"
            }`}
          >
            {task.taskName}
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-blue-800 px-2 py-1 bg-blue-100 rounded">
            {task.catagory}
          </span>
          <div>
        <button
          onClick={() => onEdit(task)}
          className="px-4  bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Edit
        </button>
      </div>
          <button
            onClick={() => onDelete(task)}
            className="text-sm text-red-500 bg-red-200 rounded-lg px-4 py-1 hover:bg-red-400 hover:text-red-700 font-semibold"
          >
            Delete
          </button>
        </div>
      </div>

      {/* Description */}
      {task.taskDesc && (
        <p className={task.done ? "line-through" : "text-gray-700"}>
          {task.taskDesc}
        </p>
      )}

      {/* SubTasks */}
      {task.subTasks && task.subTasks.length > 0 && (
        <button
          onClick={() => setShowSub(!showSub)}
          className="text-sm text-blue-600 underline hover:text-blue-800 w-fit"
        >
          {showSub ? "Hide SubTasks" : "Show SubTasks"}
        </button>
      )}

      {/* SubTask List */}
      {showSub && task.subTasks && (
        <ul className="list-disc list-inside text-sm pl-4">
          {task.subTasks.map((sub, index) => (
            <li key={index} className={task.done ? "line-through" : ""}>
              {sub}
            </li>
          ))}
        </ul>
      )}

      
      
    </div>
  );
};

export default TaskDisplay;
