import React from 'react'

const DButton = (props) => {
  return (
    <div>
        <button className='border-black border-[1px] py-1 px-6 text-1xl'>{props.data}</button>
    </div>
  )
}

export default DButton