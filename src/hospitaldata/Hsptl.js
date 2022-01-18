import React from 'react'

function Hsptl({hspItem, setSNum}) {
    return (
            <tr onClick={()=>{setSNum(hspItem.srno)}}>
                <th scope="row">{hspItem.srno}</th>
                <td style={{textAlign:"start"}}>{hspItem.health_facility_name}</td>
                <td style={{textAlign:"start"}}>{hspItem.landline_number}</td>
                {/* <td>@mdo</td> */}
            </tr>
    )
}

export default Hsptl
