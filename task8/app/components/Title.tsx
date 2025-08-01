import React from 'react'
interface prop {
    label :string;
}

const Title = ({label}:prop) => {
  return (
    <div className='font-bold text-sky-900 text-lg'>{label}</div>
  )
}

export default Title