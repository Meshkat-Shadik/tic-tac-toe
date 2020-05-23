import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Board from "./board.jsx";

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] == squares[b] && squares[a] == squares[c]) {
      return squares[a];
    }
  }

  return null;
}

class Game extends Component {
  state = {
    history: [
      {
        squares: Array(9).fill(null),
      },
    ],
    step: 0,
    xIsNext: true,
  };

  handleClick = (i) => {
    console.log(i);
    const history = this.state.history.slice(0, this.state.step + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([{ squares }]),
      step: history.length,
      xIsNext: !this.state.xIsNext,
    });
  };

  jumpTo = (step) => {
    this.setState({
      step, //step:step
      xIsNext: step % 2 == 0,
    });
  };

  render() {
    const history = this.state.history;
    const current = history[this.state.step];
    const winner = calculateWinner(current.squares);
    console.log(winner);

    const moves = history.map((step, move) => {
      const desc = move ? "Go to Move #" + move : "Go to Game Start";

      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status = "";
    if (winner) {
      status = "winner : " + winner;
    } else {
      status = "Next Player: " + (this.state.xIsNext ? "X" : " O");
    }

    return (
      <div>
        <h1
          className="text-danger display-4 text-center my-5"
          style={{ fontSize: "30px" }}
        >
          game component
        </h1>
        <Board onClick={this.handleClick} squares={current.squares} />

        <div className="row my-5 d-flex justify-content-center">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}
export default Game;
