import React, { useContext, useState } from 'react'
import './LoginPage.css'
import userDetails from './usersdata'
import {HomePageDisp,NameShare} from '../App'


function LoginPage() {
    // const [userName,setDetails] = useState('')
    // const [password,setPassword] = useState('')
    const [details,setDetails] = useState({username:"", password:""})
    const [access,setAccess] = useState ()

    // const homePageDisp = createContext()
    const status = useContext(HomePageDisp)
    const pName = useContext(NameShare)

    let validation = (e)=>{
        setDetails({...details,[e.target.name]:e.target.value})
        // console.log(details)
    }

    let handleSubmit = (e)=>{
        e.preventDefault()
        // setAccess(false)
        console.log(details)
        userDetails.map((i)=>{

            // (((i.userName === details.username) && (i.passWord === details.password)) ? (setAccess(true)) : setAccess(false))
            if((i.userName === details.username) && (i.passWord === details.password)){
                setAccess(true)
                pName(i.name)
            }else{
                setAccess("no")
            }
        })
        console.log(access)
        status(access)
    }


    return (
        <div className="Parent">
            <div id="Heading"><h1 style={{color:"white"}}>User Login</h1></div>
            <form>
            <div className="Child">
                <label htmlFor="uname" className="Labels">UserName</label>
                <input id="uname" name="username" type="text-box" onChange={validation}></input>
            </div>
            <div className="Child">
                <label htmlFor="pwd" className="Labels">UserPassword</label>
                <input id="pwd" name="password" type="password" onChange={validation}></input>
            <div id="button"><button className="btn btn-primary" type="submit" onClick={handleSubmit}>Login</button></div>
            {(access === "no" && <h5 style={{color:"red"}}>Details incorrect, Please ask Admin to add your details.</h5>)}
            </div>
            </form>
        </div>
    )
}

export default LoginPage
