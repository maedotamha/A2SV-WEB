import { useState } from "react";
import { Task } from "../types/TaskType";


interface AddTaskProps {
  onAddTask: (task: Task) => void;
}
const AddTask = ({ onAddTask }: AddTaskProps) => {
    
    const [taskName, setTaskName] = useState ("");
    const [subTasks, setSubTasks] = useState<string[]>([]);
    const [subTaskInput, setSubTaskInput] = useState("");
    const [taskDesc, setTaskDesc] = useState("");
    const [catagory, setCatagory] = useState<"Work" | "Study" | "Assignment" | "Chores" | "Other">("Other");
    const handleAddSubTask = () =>{
        if (subTaskInput.trim() !== ""){
            setSubTasks([...subTasks,subTaskInput.trim()]);
            setSubTaskInput("");
        }
    }
    const handleSubmit =()=>{
        const newTask : Task= {
            taskName,
            subTasks : subTasks.length > 0 ? subTasks : null,
            taskDesc : taskDesc || null,
            catagory,            
        } 

        onAddTask(newTask);

        setTaskName(""),
        setCatagory("Other"),
        setSubTasks([]),
        setTaskDesc("");
    }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-xl border border-blue-200">
      <h2 className="text-2xl font-bold text-blue-700 mb-6">Add a New Task</h2>

      <div className="mb-4">
        <label className="block text-blue-700 font-medium mb-1">Task Name</label>
        <input
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter task name"
        />
      </div>

      <div className="mb-4">
        <label className="block text-blue-700 font-medium mb-1">SubTasks</label>
        <div className="flex gap-2 mb-2">
          <input
            value={subTaskInput}
            onChange={(e) => setSubTaskInput(e.target.value)}
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Add a subtask"
          />
          <button
            onClick={handleAddSubTask}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Add
          </button>
        </div>
        {subTasks.length && (
          <ul className="list-disc list-inside text-sm text-blue-900 space-y-1">
            {subTasks.map((st, i) => (
              <li key={i}>{st}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-blue-700 font-medium mb-1">Task Description</label>
        <input
          value={taskDesc}
          onChange={(e) => setTaskDesc(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Optional description"
        />
      </div>

      <div className="mb-6">
        <label className="block text-blue-700 font-medium mb-1">Category</label>
        <select
          value={catagory}
          onChange={(e) => setCatagory(e.target.value as Task["catagory"])}
          className="w-full px-4 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="Study">Study</option>
          <option value="Work">Work</option>
          <option value="Assignment">Assignment</option>
          <option value="Chores">Chores</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <button
        onClick={handleSubmit}
        className="w-full py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition"
      >
        Submit Task
      </button>
    </div>
  )
}

export default AddTask