import React from 'react'

function Notification({message}) {
  return (
    <div className='notifier'>
        <div className="left">
            <i class="fa-solid fa-check"></i>
            {message}
        </div>
        <div className="right">
            <i class="fa-solid fa-xmark"></i>
        </div>
    </div>
  )
}

export default Notification