interface props{
    subTasks : string[],
    inputValue : string ,
    setInputValue : (val : string) => void,
    addSubTask : () => void,
}

const SubTaskInput = ({subTasks , inputValue , setInputValue , addSubTask} : props) => {
  return (
    <div className="mb-4">
        <label className="block text-blue-700 font-medium mb-1">SubTasks</label>
        <div className="flex gap-2 mb-2">
            <input 
            value = {inputValue}
            onChange = {(e)=>setInputValue(e.target.value)}
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
            <button
            onClick={addSubTask}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
            Add
            </button>

        </div>
        {subTasks.length > 0 && (
            <ul>
            {subTasks.map((value ,i) => (
                <li key = {i}>{value}</li>
            ))}
            </ul>
        )}
    </div>
  )
}

export default SubTaskInput