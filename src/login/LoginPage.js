import React from 'react'
import './LoginPage.css'

function LoginPage() {
    return (
        <div className="Parent">
            <div className="Child">
            <h4 className="Labels">UserName</h4>
            <input type="text-box"></input>
            </div>
            <div className="Child">
            <h4 className="Labels">Password</h4>
            <input type="password"></input>
            </div>
        </div>
    )
}

export default LoginPage
