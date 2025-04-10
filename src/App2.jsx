import {useState} from "react";
import './App2.css'
import './Tailwind.css'

function Square({value, onClickSquare}){
    return(
        <button className='square' onClick={handleClick}>{value}</button>
    )
}

export default function Board() {
    const [square, setSquare] = useState(Array(9).fill(null))
    function handleClick(){
        const nextSquare = square.slice();
        nextSquare[0] = 'X';
        setSquare(nextSquare);
    }
    return(
        <>
            <div className="board-row">
                <Square value={square[0]} onClickSquare={handleClick}/>
                <Square value={square[1]}/>
                <Square value={square[2]}/>
            </div>
            <div className="board-row">
                <Square value={square[3]}/>
                <Square value={square[4]}/>
                <Square value={square[5]}/>
            </div>
            <div className="board-row">
                <Square value={square[6]}/>
                <Square value={square[7]}/>
                <Square value={square[8]}/>
            </div>
        </>
        
    )
}