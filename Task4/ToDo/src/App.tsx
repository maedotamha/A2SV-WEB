import { useState } from "react";
import AddTask from "./comp/AddTask";
import TaskDisplay from "./comp/TaskDisplay";
import { Task } from "./types/TaskType";

const App = () => {

  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskToEdit, setTaskToEdit] = useState<Task | null>(null);
  const [showAddTask , setShowAddTask] = useState(false);

  const handleAddTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const handleDeleteTask = (taskToDelete: Task) => {
    setTasks(tasks.filter((t) => t !== taskToDelete));
    if (taskToEdit === taskToDelete) setTaskToEdit(null);
  };

  const handleToggleDone = (taskToToggle: Task) => {
    const updatedTasks = tasks.map((t) =>
      t === taskToToggle ? { ...t, done: !t.done } : t
    );
    setTasks(updatedTasks);
  };

  const handleEditTask = (task: Task) => {
    setTaskToEdit(task);
  };

  const handleUpdateTask = (updatedTask: Task) => {
    setTasks(tasks.map((t) => (t === taskToEdit ? updatedTask : t)));
    setTaskToEdit(null);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6">
      <div >
        <h1 className="text-2xl font-bold text-blue-800"> TO DO LIST </h1>
        
        {showAddTask ? (
          <div>
            <AddTask
              onAddTask={(task) => {
                handleAddTask(task);
                setShowAddTask(false); 
              }}
              onUpdateTask={(task) => {
                handleUpdateTask(task);
                setShowAddTask(false); 
              }}
              taskToEdit={taskToEdit}

              clearEditMode={() => {
                setTaskToEdit(null);
                setShowAddTask(false);
              }}
            />
            
          </div>
        ) :
        <button
          onClick={() => setShowAddTask(true)}
          className="rounded bg-blue-200 px-3 py-1 mx-auto block"
          >
          Add a task
        </button>}
      </div>

      <h2 className="text-2xl font-bold text-blue-800">Your Tasks</h2>
      <div className="space-y-4">
        {tasks.length === 0 ? (
          <p className="text-gray-500">No tasks yet.</p>
        ) : (
          tasks.map((task, i) => (
            <TaskDisplay
              key={i}
              task={task}
              onEdit={(task)=>{
                handleEditTask(task)
                setShowAddTask(true)
              }}
              onDelete={handleDeleteTask}
              onToggleDone={handleToggleDone}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default App;
