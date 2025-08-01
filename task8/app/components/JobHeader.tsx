import React from 'react'
interface props {
    title : string;
    whenWhere :string;
}
const JobHeader = ({title , whenWhere} : props) => {
  return (
    <div
    className='flex flex-col '>
        < p className = "size-l text-sky-950 font-semibold text-lg ">{title}</p>
        <p
        className='text-gray-300 text-sm' 
        >{whenWhere}</p>
    </div>
  )
}

export default JobHeader