import React from 'react'

function HsptlCard({hspData, sNum}) {

    // let dataArr = hspData
    // let Arri = sNum
    let index = hspData.findIndex(i => i.srno === sNum)
    let ele = hspData[index]
    return (
        <div>
            <div className="card text-white bg-secondary" style={{width: "20rem", marginLeft:"1rem"}}>
            <div className="card-body">
                <h3 className="display-6" style={{color:"#ee4c58", fontSize:"2rem", fontWeight:"bold"}}>Hospital Details</h3>

                <h4 className="card-title" style={{color:"black", fontSize:"1.5rem"}}>{ele ? ele.health_facility_name : "."}</h4>
                <h6 className="card-subtitle" style={{color:"black", marginBottom:"1rem"}}>{ele ? ele.facility_type : "."}</h6>

                <h6 className="card-subtitle" style={{color:"black", textAlign:"left"}}>{ele ? ele.address : "."}</h6>
                <h6 className="card-subtitle" style={{color:"black", textAlign:"left"}}>{ele ? ele.street : "."}</h6>

                <h6 className="card-subtitle" style={{color:"black", textAlign:"left"}}>{ele ? ele.district_name : "."}</h6>
                <h6 className="card-subtitle" style={{color:"black", textAlign:"left"}}>{ele ? ele.state_name : "."}</h6>
                <h6 className="card-subtitle" style={{color:"black", textAlign:"left"}}>{ele ? ele.pincode : "."}</h6>
            </div>
            </div>
        </div>
    )
}

export default HsptlCard
