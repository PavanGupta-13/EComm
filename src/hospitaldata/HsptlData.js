import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Hsptl from './Hsptl'
import HsptlCard from './HsptlCard'
// import './HsptlData.css'

function HsptlData() {

    const [hspData,setHspData] = useState([])
    let url = "https://api.data.gov.in/resource/0dfebd78-bac4-44be-9291-025a983323f4?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&offset=0&limit=10"
    useEffect(() => {
        axios.get(url)
            .then((resp)=>{console.log(resp.data); setHspData(resp.data.records)})
    }, [])

    const [sNum,setSNum] = useState(0)

    return (
        <div>
            <h1 className="display-1" style={{color:"#ff9900"}}>Nearby Hospitals Data</h1>
            <div className="flexBox">
            <div style={{width:"70%", marginLeft:"1rem"}}>
            <table className="table table-dark table-hover">
            <thead>
                <tr>
                <th scope="col" style={{color:"#4dc9f6"}}>S.No.</th>
                <th scope="col" style={{color:"#4dc9f6"}}>Hospital Name</th>
                <th scope="col" style={{color:"#4dc9f6"}}>Tel.No.</th>
                {/* <th scope="col">Handle</th> */}
                </tr>
            </thead>
            <tbody>
                {hspData.map((hspItem)=>(
                    <Hsptl hspItem={hspItem} key={hspItem.srno} setSNum={setSNum}/>
                ))}
            </tbody>
            </table>
            </div>
            <HsptlCard hspData={hspData} sNum={sNum}/>
            </div>
        </div>
    )
}

export default HsptlData
