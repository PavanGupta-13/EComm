import React, { useContext, useState } from 'react'
import './LoginPage.css'
import userDetails from './usersdata'
import {HomePageDisp,NameShare} from '../App'


function LoginPage() {
    // const [userName,setDetails] = useState('')
    // const [password,setPassword] = useState('')
    const [details,setDetails] = useState({username:"", password:""})
    const [access,setAccess] = useState ()
    const [errMsg,setErrMsg] = useState (true)

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
        // setErrMsg(false)
        console.log(errMsg)
            // (((i.userName === details.username) && (i.passWord === details.password)) ? (setAccess(true)) : setAccess(false))
            if((i.userName === details.username) && (i.passWord === details.password)){
                setAccess(true)
                console.log("entered")
                pName(i.name)
            }else{
                // setAccess("no")
                if(i.userName!=="" && i.passWord!=="")
                    setErrMsg(false)
                    console.log("Wromg")
            }
        })
        console.log(access)
        status(access)
    }


    return (
        <div className="Parent">
            <div id="Heading"><h1 style={{color:"white"}}>User Login</h1></div>
            <form onSubmit={handleSubmit}>
            <div className="Child">
                <label htmlFor="uname" className="Labels">UserName</label>
                <input id="uname" name="username" type="text-box" onChange={validation}></input>
            </div>
            <div className="Child">
                <label htmlFor="pwd" className="Labels">UserPassword</label>
                <input id="pwd" name="password" type="password" onChange={validation}></input>
            <div id="button"><button className="btn btn-primary" type="submit" onSubmit={handleSubmit}>Login</button></div>
            <h5 style={{color:"red", display:errMsg && "none", marginTop:"1rem"}}>Details incorrect, Please ask Admin to add your details.</h5>
            </div>
            </form>
        </div>
    )
}

export default LoginPage
