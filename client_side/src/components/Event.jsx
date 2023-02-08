import React from "react"

const Event = (props) => {
    return (
        <div> 
        <h2>{props.title}</h2>
        <p>START TIME: <span>{props.sdate.substring(1, 11)}</span> at: {props.sdate.substring(12, 17)}</p>
        <p>FINISH TIME: <span>{props.fdate.substring(1, 11)}</span> at: {props.fdate.substring(12, 17)}</p>
        </div>
    )
}

export default Event;