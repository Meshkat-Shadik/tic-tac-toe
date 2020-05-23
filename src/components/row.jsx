import React from "react";
import Square from "./square";

//const renderBox = (i) => 



function work(x) {
  let arr = x.val.join("");
  return(
      Object.keys(arr).map(item=><Square key={arr[item]} value={arr[item]}/>)
  )
}

function Row(props) {
  return (
    <div className="row d-flex justify-content-center">
      <div>{work(props)}</div>
    </div>
  );
}

export default Row;
