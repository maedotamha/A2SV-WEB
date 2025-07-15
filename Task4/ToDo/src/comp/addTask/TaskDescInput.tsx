interface props {
    value: string;
    onChange: (val: string) => void;
}

const TaskDescInput = ({ value, onChange }: props) => (
  <div className="mb-4">
    <label className="block text-blue-700 font-medium mb-1">Description</label>
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>
);
export default TaskDescInput