import React from 'react'
import './LoginPage.css'

function LoginPage() {
    return (
        <div className="Parent">
            <div id="Heading"><h1>User Login</h1></div>
            <div className="Child">
            <h4 className="Labels">UserName</h4>
            <input type="text-box"></input>
            </div>
            <div className="Child">
            <h4 className="Labels">User Password</h4>
            <input type="password"></input>
            </div>
        </div>
    )
}

export default LoginPage
