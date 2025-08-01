import React from 'react'
interface prop {
    desc : string;
}

const Description = ({desc}:prop) => {
  return (
    <div className='font-light text-sm'>{desc}</div>
  )
}

export default Description