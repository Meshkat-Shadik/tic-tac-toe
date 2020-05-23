import React from "react";
import Row from "./row";
import Square from "./square";

const arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];
const arr3 = [6, 7, 8];

function Board(props) {
  const renderSquare = (arr) =>
    Object.keys(arr).map((item) => (
      <Square
        key={arr[item]}
        value={props.squares[arr[item]]}
        onClick={() => props.onClick(arr[item])}
      />
    ));

  return (
    <div>
      {/* <Row val={arr1}/>     //backup rendering file row.jsx
           <Row val={arr2}/>
           <Row val={arr3}/> */}

      <div className="row d-flex  justify-content-center">
        {renderSquare(arr1)}
      </div>
      <div className="row d-flex justify-content-center">
        {renderSquare(arr2)}
      </div>
      <div className="row d-flex justify-content-center">
        {renderSquare(arr3)}
      </div>
    </div>
  );
}

export default Board;
