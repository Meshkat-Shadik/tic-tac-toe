import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Game from './components/game'

 const App = () => {
    return (
        <div>
            <h1 className='text-info display-4 text-center'>Tic Tac Toe</h1>
            <Game/>
            
        </div>
    )
}

export default App