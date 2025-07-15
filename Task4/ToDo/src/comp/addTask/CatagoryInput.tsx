import { Task } from "../../types/TaskType";

interface Props {
  value: Task["catagory"];
  onChange: (val: Task["catagory"]) => void;
}

const CategoryInput = ({ value, onChange }: Props) => (
  <div className="mb-6">
    <label className="block text-blue-700 font-medium mb-1">Category</label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as Task["catagory"])}
      className="w-full px-4 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      <option value="Study">Study</option>
      <option value="Work">Work</option>
      <option value="Assignment">Assignment</option>
      <option value="Chores">Chores</option>
      <option value="Other">Other</option>
    </select>
  </div>
);

export default CategoryInput;
