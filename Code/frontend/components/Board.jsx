import Square from "./Square";
import './Board.css';

function Board() {
    const boardSize = 8;
    let squares = [];

    for (let r = 0; r < boardSize; ++r) {
        for (let c = 0; c < boardSize; ++c) {
            const isblack = (r + c) % 2 === 1;
            squares.push(
                <Square
                    key={`${r}-${c}`}
                    isBlack={isblack}
                    piece={null}
                />
            )
        }
    }

    return (
        <div className="board">
            {squares}
        </div>
    );
}

export default Board;