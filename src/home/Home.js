import React,{useEffect, useState} from 'react'
import axios from 'axios'
import './Home.css'

function Home() {

    const[Casedata,setData] = useState()
    const[stateData,setStateData] = useState([])
    const[dispCard,setDispCard] = useState(true)
    const url = "https://api.rootnet.in/covid19-in/stats/latest"
    useEffect(() => {
        axios.get(url)
         .then((res)=>{console.log(res.data.data)
         setData(res.data.data)})
         
    }, [])
    let toggleData = ()=>{
        setDispCard(!dispCard)
    }

    return (
        <div>
            
            {/* <div className="row caseBox"> */}
            <div className="col-sm-6 caseBox">
                <div className="card card text-white bg-danger mb-3">
                <div className="card-body">
                    <h2 className="card-title display-4">--COVID LIVE DATA--</h2>
                    <div className="flexBox">
                        <div className="dataBox">
                        <h1 className="caseload">{Casedata ? Casedata.summary.total : "..."}</h1>
                        <p className="card-text">Total Confirmed Cases</p>
                        </div>
                        <div className="dataBox">
                        <h1 className="caseload">{Casedata ? Casedata.summary.deaths : "..."}</h1>
                        <p className="card-text">Total Confirmed Deaths</p>
                        </div>
                    </div>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
                </div>

                <div className="card card text-dark bg-info mb-3">
                <div className="card-body">
                    <h2 className="card-title">Mask Up & Save Lives</h2>
                </div>
                </div>


                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" onClick={toggleData} style={{display:!dispCard && "none"}}>
                    State Data
                </button>


                <div className="card card text-dark bg-info mb-3" style={{display:dispCard &&  "none"}}>
                    <ul className="list-group list-group-flush">
                        <div className="flexBox2">
                            <li className="list-group-item items">State</li>
                            <li className="list-group-item items">Confirmed Cases</li>
                        </div>
                    </ul>
                </div>

            </div>
            {/* </div> */}
        </div>
    )
}

export default Home

//data.summary.total , .deaths
//