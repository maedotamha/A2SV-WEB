import React from 'react'
interface prop {
    desc : string;
}

const Description = ({desc}:prop) => {
  return (
    <div className='font-light'>{desc}</div>
  )
}

export default Description