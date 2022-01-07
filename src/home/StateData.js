import React from 'react'

function StateData({state}) {
    return (
        <div >
        <ul className="list-group list-group-flush">
            <div className="flexBox2" style={{marginBottom:"1rem"}}>
                <li className="list-group-item items">{state.loc}</li>
                <li className="list-group-item items">{state.totalConfirmed}</li>
            </div>
        </ul>
        </div>
    )
}

export default StateData
