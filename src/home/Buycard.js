import React, { useState } from 'react'

function Buycard({pName}) {

    const[dispCart, setDispCart] = useState(true)
    const[cartQty, setCartQty] = useState(0)

    const cartMod = (action)=>{
        if(action==="add" && cartQty<20){
            let newQty = cartQty+1
            setCartQty(newQty)
        }else{
            if(cartQty>0){
                let newQty = cartQty-1
                setCartQty(newQty)
            }
            else{
                setCartQty(0)
            }
        }
        // console.log(cartQty)
    }

    return (<>
        <div style={{marginLeft:"30%", marginTop:"1rem"}}>
            <div className="card  text-dark bg-warning mb-3" style={{width: "18rem"}}>
            <img src="https://s.wsj.net/public/resources/images/B3-GL161_CVEMER_8SR_20200402162001.jpg" className="card-img-top" alt="..." ></img>
            <div className="card-body">
                <div className="flexBox">
                <h6 className="card-title" style={{ marginLeft:"1rem"}}>Covid Home Kit</h6>
                <h6 className="card-title" style={{color:"red", textDecoration:"line-through", marginLeft:"1rem"}}> Rs.1799 </h6>
                <h5 className="card-title" style={{ marginLeft:"1rem"}}> Rs.799 </h5>
                </div>
                
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                <a href="#" className="btn btn-primary" onClick={()=>{setDispCart(!dispCart)}}>Buy & Secure</a>
                
            </div>
            </div>
        </div>

        <div>
        <div className="card bg-light mb-3" style={{maxWidth: "540px",cursor:"pointer", padding:"1rem" ,position:"fixed", display:dispCart && "none",  top:"25%", left:"30%"}}>
        <div className="row g-0">
            <div className="col-md-4">
            <img src="https://s.wsj.net/public/resources/images/B3-GL161_CVEMER_8SR_20200402162001.jpg" className="img-fluid rounded-start" alt="..."></img>
            <div className="flexBox3">
                <h4 className="card-title" style={{color:"black", marginLeft:"1rem"}}>Covid Home Kit</h4>
                <h6 className="card-title" style={{color:"red", textDecoration:"line-through", marginLeft:"1rem"}}> Rs.1799 </h6>
                <h4 className="card-title" style={{color:"black", marginLeft:"1rem"}}> Rs.799 </h4>
                </div>
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title display-1" style={{color:"black", fontSize:"2rem"}}>{pName}'s Cart</h5>
                {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-dash-circle" viewBox="0 0 16 16" onClick={()=>{cartMod("sub")}} cursor="pointer">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="black" className="bi bi-cart4" viewBox="0 0 16 16" style={{marginLeft:"0.5rem"}}>
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-plus-circle" viewBox="0 0 16 16" onClick={()=>{cartMod("add")}} cursor="pointer" style={{marginLeft:"0.5rem"}}>
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                </div>
                <form className="flexBox3">
                <input readOnly="true"  type="textbox" value={cartQty} style={{width:"2rem",height:"2rem",fontSize:"1rem", marginTop:"2rem", alignSelf:"center"}}></input>
                <button type="submit" className="btn btn-primary" style={{width:"10rem", alignSelf:"center", marginTop:"1rem"}}>Add to Cart</button>
                </form>
                <p className="card-text" style={{marginTop:"1rem"}}><small className="text-muted">Deal ends in 3 Minutes</small></p>
            </div>
            </div>
        </div>
        </div>
        </div>
    </>)
}

export default Buycard
