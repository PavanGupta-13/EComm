import React,{useRef, useState} from 'react'
import './SignUp.css'
import {useAuth} from '../context/AuthContext'
// import { Alert } from 'bootstrap'

function SignUp() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmationRef = useRef()
    const {signup, currentUser} = useAuth()
    const [error,setError] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()

        if(passwordRef.current.value !== passwordConfirmationRef.current.value){
            return setError('Passwords donot match')
        }

        try{
            setError('')
            await signup(emailRef.current.value, passwordRef.current.value)
        }
        catch{
            setError('Failed to create an account')
        }

        
    }


    return (
        <div className="Parent">
            <div id="Heading"><h1>Sign Up</h1></div>

            <div className="Child">
            <form onSubmit={handleSubmit}>
                {/* {error && <Alert variant="danger">{error}</Alert>} */}
                {error && <h3>{error}</h3>}
                {/* {JSON.stringify(currentUser)} */}
                {currentUser  && currentUser.email}
                <label htmlFor="uname" className="Labels">UserName</label>
                <input type="email" id="uname" name="username" ref={emailRef} required></input>

                <label htmlFor="pwd" className="Labels">Password</label>
                <input type="password" id="pwd" name="password" ref={passwordRef} required></input>

                <label htmlFor="confirmpwd" className="Labels">Confirm Password</label>
                <input type="password" id="confirmpwd" name="confirm password" ref={passwordConfirmationRef} required></input>

                <button className="btn btn-primary" onSubmit={handleSubmit} type="submit">SignUp</button>
            </form>
            </div>

            {/* <div className="Child">
            <h4 className="Labels">UserPassword</h4>
            <input type="password"></input>
            </div> */}

            {/* <div id="button"><button className="btn btn-primary" type="button">SignUp</button></div> */}

            <div>Already have an account? Log In</div>
        </div>
    )
}

export default SignUp
