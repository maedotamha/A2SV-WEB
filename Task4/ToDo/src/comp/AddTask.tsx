import { useEffect, useState } from "react";
import { Task } from "../types/TaskType";
import TaskNameInput from "./addTask/TaskNameInput";
import SubTaskInput from "./addTask/SubTaskInput";
import TaskDescInput from "./addTask/TaskDescInput";
import CategoryInput from "./addTask/CatagoryInput";
import SubmitButton from "./addTask/Submit";

interface AddTaskProps {
  onAddTask: (task: Task) => void;
  onUpdateTask?: (task: Task) => void;
  taskToEdit?: Task | null;
  clearEditMode?: () => void;
}

const AddTask = ({ onAddTask, onUpdateTask, taskToEdit, clearEditMode }: AddTaskProps) => {
  const [taskName, setTaskName] = useState("");
  const [subTasks, setSubTasks] = useState<string[]>([]);
  const [subTaskInput, setSubTaskInput] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [catagory, setCatagory] = useState<"Work" | "Study" | "Assignment" | "Chores" | "Other">("Other");

  useEffect(() => {
    if (taskToEdit) {
      setTaskName(taskToEdit.taskName);
      setSubTasks(taskToEdit.subTasks ?? []);
      setTaskDesc(taskToEdit.taskDesc ?? "");
      setCatagory(taskToEdit.catagory);
    }
  }, [taskToEdit]);

  const handleAddSubTask = () => {
    if (subTaskInput.trim()) {
      setSubTasks([...subTasks, subTaskInput.trim()]);
      setSubTaskInput("");
    }
  };

  const handleSubmit = () => {
    const newTask: Task = {
      taskName,
      subTasks: subTasks.length ? subTasks : null,
      taskDesc: taskDesc || null,
      catagory,
      done: taskToEdit?.done ?? false,
    };

    if (taskToEdit && onUpdateTask) {
      onUpdateTask(newTask);
    } else {
      onAddTask(newTask);
    }

    resetForm();
  };

  const resetForm = () => {
    setTaskName("");
    setSubTasks([]);
    setSubTaskInput("");
    setTaskDesc("");
    setCatagory("Other");
    clearEditMode?.();
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-xl border border-blue-200">
      <h2 className="text-2xl font-bold text-blue-700 mb-6">
        {taskToEdit ? "Edit Task" : "Add a New Task"}
      </h2>

      <TaskNameInput value={taskName} onChange={setTaskName} />
      <SubTaskInput
        subTasks={subTasks}
        inputValue={subTaskInput}
        setInputValue={setSubTaskInput}
        addSubTask={handleAddSubTask}
      />
      <TaskDescInput value={taskDesc} onChange={setTaskDesc} />
      <CategoryInput value={catagory} onChange={setCatagory} />
      <div className="flex flex-row gap-2">
        <button
          onClick={clearEditMode}
          className="w-full py-3 bg-red-700 text-white font-semibold rounded-lg hover:bg-red-800"
        >
          Cancel
        </button>
        
        <SubmitButton onClick={handleSubmit} label={taskToEdit ? "Update Task" : "Submit Task"} />
            </div>
      
    </div>
  );
};

export default AddTask;
