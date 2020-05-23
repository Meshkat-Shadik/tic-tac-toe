import React from 'react'

function Square(props) {
    return (
        <button className="basic form-control float-left" onClick={props.onClick} style={{height:"60px", width:"60px",borderRadius:"0px"}}>
            {props.value}
        </button>
    )
}

export default Square