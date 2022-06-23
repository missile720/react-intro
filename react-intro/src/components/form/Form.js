import React, { useState } from 'react'
import "./Form.css"

function Form() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstNameIsValid, setFirstNameIsValid] = useState(true);
    const [lastNameIsValid, setLastNameIsValid] = useState(true);
    const [emailIsValid, setEmailIsValid] = useState(true);
    const [passwordIsValid, setPasswordIsValid] = useState(true);

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
        if(firstName === "") {
            setFirstNameIsValid(false);
        }
        else{
            setFirstNameIsValid(true);
        }

        if(lastName === "") {
            setLastNameIsValid(false);
        }
        else{
            setLastNameIsValid(true);
        }

        if(email === "") {
            setEmailIsValid(false);
        }
        else{
            setEmailIsValid(true);
        }

        if(password === "") {
            setPasswordIsValid(false);
        }
        else{
            setPasswordIsValid(true);
        }

        if(firstName !== "" && lastName !== "" && email !== "" && password !== ""){
            console.log(firstName);
            console.log(lastName);
            console.log(email);
            console.log(password);

            setFirstNameIsValid(true);
            setLastNameIsValid(true);
            setEmailIsValid(true);
            setPasswordIsValid(true);
        }
      };

    return (
        <form onSubmit={submitHandler}>
            <div className='InputField'>
                <input type="text" placeholder="First Name" onChange={firstNameHandler} style={{ borderColor: firstNameIsValid ? null : "red" }}></input>
                {firstNameIsValid ? null : <svg className="InvalidImage" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#FF7979" cx="12" cy="12" r="12"/><rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1"/><rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1"/></g></svg>}
            </div>
            {firstNameIsValid ? null : <p className='Invalid'>First name cannot be empty</p>}
            <br></br>
            <div className='InputField'>
                <input type="text" placeholder="Last Name" onChange={lastNameHandler} style={{ borderColor: lastNameIsValid ? null : "red" }}></input>
                {lastNameIsValid ? null : <svg className="InvalidImage" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#FF7979" cx="12" cy="12" r="12"/><rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1"/><rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1"/></g></svg>}
            </div>
            {lastNameIsValid ? null : <p className='Invalid'>Last name cannot be empty</p>}
            <br></br>
            <div className='InputField'>
                <input type="text" placeholder="Email Address" onChange={emailHandler} style={{ borderColor: emailIsValid ? null : "red" }}></input>
                {emailIsValid ? null : <svg className="InvalidImage" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#FF7979" cx="12" cy="12" r="12"/><rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1"/><rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1"/></g></svg>}
            </div>
            {emailIsValid ? null : <p className='Invalid'>Email cannot be empty</p>}
            <br></br>
            <div className='InputField'>
                <input type="text" placeholder="Password" onChange={passwordHandler} style={{ borderColor: passwordIsValid ? null : "red" }}></input>
                {passwordIsValid ? null : <svg className="InvalidImage" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#FF7979" cx="12" cy="12" r="12"/><rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1"/><rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1"/></g></svg>}
            </div>
            {passwordIsValid ? null : <p className='Invalid'>Password cannot be empty</p>}
            <br></br>
            <button className="Trial" type="submit">CLAIM YOUR FREE TRIAL</button>
        </form>
    )
}

export default Form