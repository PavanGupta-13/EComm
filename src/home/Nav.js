import React from 'react'
import './Nav.css'
import {Link, Outlet} from "react-router-dom"

function Nav({pName,cQty,setDisp}) {
    return (
        <div className="Navbar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid Barcolor">
    <a className="navbar-brand" href="#">
    <div className="title"> 
          <h1 className="display-6" style={{color:"#ff9933"}}>Medi</h1>
          <h1 className="display-6" style={{color:"#0099cc"}}>Buddy</h1>
          <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-badge-tm-fill" viewBox="0 0 16 16">
          <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm3.295 3.995V11H4.104V5.995h-1.7V5H7v.994H5.295zM8.692 7.01V11H7.633V5.001h1.209l1.71 3.894h.039l1.71-3.894H13.5V11h-1.072V7.01h-.057l-1.42 3.239h-.773L8.75 7.008h-.058z"/>
          </svg></span>
        </div>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
          <Link className="nav-link" to="/">Home</Link>
        </li>
          

        <li className="nav-item">
          <Link className="nav-link" to="/HspData">Hospitals</Link>
        </li>

        {/* <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>

        <li className="nav-item profile">
          <a className="nav-link" href="#">{pName}</a>
        </li> */}


        <li className="nav-item">
          {/* <a className="nav-link" href="#"> */}
          <Link className="nav-link" to="/Cart">
          {pName}'s
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="black" className="bi bi-cart4" viewBox="0 0 16 16" style={{marginLeft:"0.5rem"}}>
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
          </svg>
          <input type="text" readOnly="true" style={{marginLeft:"0",borderRadius:"50%", width:"18px", height:"18px", fontSize:"0.6rem", fontWeight:"bolder", backgroundColor:"#1793d1", color:"white", textAlign:"center"}} value={cQty}></input>
          </Link>
          {/* </a> */}
        </li>

        {/* <li>
          <button className="btn btn-dark">Logout</button>
        </li> */}
        
      </ul>
      {/* <button className="btn btn-dark">Logout</button> */}
    </div>
  </div>
  <div className="Barcolor" style={{height:"4.15rem", paddingTop:"1rem", paddingRight:"1rem"}}><button className="btn btn-dark"  onClick={()=>{setDisp(false)}}>Logout</button></div>
</nav>

<Outlet/>
        </div>
    )
}

export default Nav
