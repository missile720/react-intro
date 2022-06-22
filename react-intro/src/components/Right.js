import React from 'react'
import SignUp from './SignUp'
import "./Right.css"

function Right() {
  return (
    <div className="Right">
        <p className='Purple'><span className='Bold'>Try it free 7 days</span> <span className="Cost">then $20/mo. thereafter</span></p>
        <SignUp/>
    </div>
  )
}

export default Right