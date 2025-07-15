import { useState } from "react";
import AddTask from "./comp/AddTask";
import TaskDisplay from "./comp/TaskDisplay";
import { Task } from "./types/TaskType";

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (task: Task) => {
    const newTask = {
      ...task,
      done: false,
    };
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (taskToDelete: Task) => {
    setTasks(tasks.filter((t) => t !== taskToDelete));
  };

  const handleToggleDone = (taskToToggle: Task) => {
    const updatedTasks = tasks.map((t) =>
      t === taskToToggle ? { ...t, done: !t.done } : t
    );
    setTasks(updatedTasks);
  };

  const handleEditTask = (taskToEdit: Task) => {
    const newName = prompt("Enter new task name", taskToEdit.taskName);
    if (!newName) return;

    const updatedTasks = tasks.map((t) =>
      t === taskToEdit ? { ...t, taskName: newName } : t
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6">
      <AddTask onAddTask={handleAddTask} />

      <h2 className="text-2xl font-bold text-blue-800">Your Tasks</h2>
      <div className="space-y-4">
        {tasks.length === 0 ? (
          <p className="text-gray-500">No tasks added yet.</p>
        ) : (
          tasks.map((task, index) => (
            <TaskDisplay
              key={index}
              task={task}
              onEdit={handleEditTask}
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
