import React,{useEffect, useState} from 'react'
import axios from 'axios'
import './Home.css'
import StateData from './StateData'
import Buycard from './Buycard'

function Home({pName,getcQty}) {

    const[Casedata,setData] = useState()
    const[stateData,setStateData] = useState([])
    const[dispCard,setDispCard] = useState(true) 
    const url = "https://api.rootnet.in/covid19-in/stats/latest"
    useEffect(() => {
        axios.get(url)
         .then((res)=>{console.log(res.data.data)
         setData(res.data.data)
         setStateData(res.data.data.regional)})
         
    }, [])
    let toggleData = ()=>{
        setDispCard(!dispCard)
    }

    // const setcQty = (i)=>{
    //     let cartQty = i
    // }

    stateData.sort((a,b)=>{return b.totalConfirmed-a.totalConfirmed})
    let finalArr = stateData.slice(0,5)
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

                {!dispCard && finalArr.map((state)=>(<div className="stateData">
                    <StateData state={state}/>
                </div>))}
                
                <Buycard pName={pName} setcQty={getcQty}/>

            </div>
            {/* </div> */}
        </div>
    )
}

export default Home

//data.summary.total , .deaths
//