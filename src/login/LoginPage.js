import React, { useContext, useState } from 'react'
import './LoginPage.css'
import userDetails from './usersdata'
import {HomePageDisp} from '../App'


function LoginPage() {
    // const [userName,setDetails] = useState('')
    // const [password,setPassword] = useState('')
    const [details,setDetails] = useState({username:"", password:""})
    const [access,setAccess] = useState ('no')

    // const homePageDisp = createContext()
    const status = useContext(HomePageDisp)

    let validation = (e)=>{
        setDetails({...details,[e.target.name]:e.target.value})
        // console.log(details)
    }

    let handleSubmit = (e)=>{
        e.preventDefault()
        console.log(details)
        userDetails.map((i)=>{
            (((i.userName === details.username) && (i.passWord === details.password)) ? (setAccess(true)) : setAccess(false))
        })
        console.log(access)
        status(access)
    }


    return (
        <div className="Parent">
            <div id="Heading"><h1>User Login</h1></div>
            <form>
            <div className="Child">
                <label htmlFor="uname" className="Labels">UserName</label>
                <input id="uname" name="username" type="text-box" onChange={validation}></input>
            </div>
            <div className="Child">
                <label htmlFor="pwd" className="Labels">UserPassword</label>
                <input id="pwd" name="password" type="password" onChange={validation}></input>
            <div id="button"><button className="btn btn-primary" type="submit" onClick={handleSubmit}>Login</button></div>
            {access !== "no" && (!access && <h5 style={{color:"red"}}>Dettails incorrect, Please ask Admin to add your details.</h5>)}
            </div>
            </form>
        </div>
    )
}

export default LoginPage
