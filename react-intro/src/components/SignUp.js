import React from 'react'
import Form from './form/Form'
import "./SignUp.css"
function SignUp() {
  return (
    <div className="Box">
        <Form/>
        <p className="Footnote">By clicking the button, you are agreeing to our <span className="Terms">Terms and Services</span></p>
    </div>
  )
}

export default SignUp