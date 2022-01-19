import React, { useState } from 'react'

function Cart({cQty, setReset}) {

    const [cartQty, setCartQty] = useState(cQty)
    // setCartQty(cQty)
    let pdtCost = 799*cartQty
    let shipChrgs = 0.01*pdtCost
    let taxes = (pdtCost+shipChrgs)*0.05
    let totalCartCost = pdtCost+shipChrgs+taxes

    return (
        <div>
            <div style={{dispaly:"flex",flexDirection:"row",marginLeft:"40%", marginTop:"4rem"}}>
            <div className="card  text-dark bg-warning mb-3" style={{width: "18rem"}}>
            <img src="https://s.wsj.net/public/resources/images/B3-GL161_CVEMER_8SR_20200402162001.jpg" className="card-img-top" alt="..." ></img>
            <div className="card-body">
                <div className="flexBox">
                <h6 className="card-title" style={{ marginLeft:"1rem"}}>Covid Home Kit</h6>
                <h6 className="card-title" style={{color:"red", textDecoration:"line-through", marginLeft:"1rem"}}> Rs.1799 </h6>
                <h5 className="card-title" style={{ marginLeft:"1rem"}}> Rs.799 </h5>
                </div>
                
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                <button className="btn btn-primary" onClick={()=>{setCartQty(0); setReset(true)}}>Empty Cart</button>
                
            </div>
            <input type="text" readOnly="true" style={{alignSelf:"flex-end", borderRadius:"50%", width:"30px", height:"30px", fontSize:"1rem", fontWeight:"bolder", backgroundColor:"#1793d1", color:"white", textAlign:"center", borderStyle:"solid", borderColor:"black"}} value={cartQty}></input>
            </div>
        </div>
        <table className="table table-light table-striped table-bordered" style={{fontSize:"1rem",width:"50%", marginLeft:"25%"}}>
            <tbody style={{textAlign:"left"}}>
            <tr>
            {/* <th scope="row">1</th> */}
            <td>Product Cost (x{cartQty})</td>
            <td style={{fontWeight:"bold"}}>{pdtCost}/-</td>
            {/* <td>@mdo</td> */}
            </tr>
            <tr>
            {/* <th scope="row">2</th> */}
            <td>Shipping Charges (1% of Cart)</td>
            <td style={{fontWeight:"bold"}}>{shipChrgs}/-</td>
            {/* <td>@fat</td> */}
            </tr>
            <tr>
            {/* <th scope="row">3</th> */}
            <td>Taxes (5% of Cart)</td>
            <td style={{fontWeight:"bold"}}>{taxes}/-</td>
            </tr>
            <tr className="table-dark">
            <td style={{fontWeight:"bolder"}}>Cart Total</td>
            <td style={{fontWeight:"bolder"}}>{totalCartCost}/-</td>
            </tr>
        </tbody>
        </table>
        </div>
    )
}

export default Cart
