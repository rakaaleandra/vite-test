import {useState} from "react";
import './App2.css'
import './Tailwind.css'

function Square({value, onClickSquare}){
    return(
        <button className='square' onClick={onClickSquare}>{value}</button>
    )
}

export default function Board() {
    const [xIsNext, setXIsNext] = useState(true);
    const [square, setSquare] = useState(Array(9).fill(null))
    function handleClick(i){
        if(square[i]){
            return;
        }
        const nextSquare = square.slice();
        if(xIsNext){
            nextSquare[i] = 'X';
        } else {
            nextSquare[i] = 'O';
        }
        setSquare(nextSquare);
        setXIsNext(!xIsNext)
    }
    return(
        <>
            <div className="board-row">
                <Square value={square[0]} onClickSquare={() => handleClick(0)}/>
                <Square value={square[1]} onClickSquare={() => handleClick(1)}/>
                <Square value={square[2]} onClickSquare={() => handleClick(2)}/>
            </div>
            <div className="board-row">
                <Square value={square[3]} onClickSquare={() => handleClick(3)}/>
                <Square value={square[4]} onClickSquare={() => handleClick(4)}/>
                <Square value={square[5]} onClickSquare={() => handleClick(5)}/>
            </div>
            <div className="board-row">
                <Square value={square[6]} onClickSquare={() => handleClick(6)}/>
                <Square value={square[7]} onClickSquare={() => handleClick(7)}/>
                <Square value={square[8]} onClickSquare={() => handleClick(8)}/>
            </div>
        </>
        
    )
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
  }