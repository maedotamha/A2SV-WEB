interface props {
    value : string,
    onChange : (vakue : string) => void,

}

const TaskNameInput = ({value , onChange} : props) => {

  return (
     <div className="mb-4">
        <label className="block text-blue-700 font-medium mb-1">Task Name</label>
        <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
  </div>
    
  )
}

export default TaskNameInput