import React, { useState } from 'react'
import "./Form.css"

function Form() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const firstNameHandler = (event) => {
        setFirstName(event.target.value);
    };

    const lastNameHandler = (event) => {
        setLastName(event.target.value);
    };

    const emailHandler = (event) => {
        setEmail(event.target.value);
    };

    const passwordHandler = (event) => {
        setPassword(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(firstName);
        console.log(lastName);
        console.log(email);
        console.log(password);
      };

    return (
        <form onSubmit={submitHandler}>
            <input type="text" placeholder="First Name" onChange={firstNameHandler}></input>
            <br></br>
            <input type="text" placeholder="Last Name" onChange={lastNameHandler}></input>
            <br></br>
            <input type="text" placeholder="Email Address" onChange={emailHandler}></input>
            <br></br>
            <input type="text" placeholder="Password" onChange={passwordHandler}></input>
            <br></br>
            <button className="Trial" type="submit">CLAIM YOUR FREE TRIAL</button>
        </form>
    )
}

export default Form