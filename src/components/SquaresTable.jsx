import React from "react";
import "../styles/SquaresTable.css";
import Square from "./Square";
import ScoreTable from "./ScoreTable";
import { useState } from "react";

const SquaresTable = ({ pasar }) => {
  const [player, setPlayer] = useState("fire");
  const [cells, setCells] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState(["", []]);
  const [endgame, setEndgame] = useState(false);
  const [puntajes, setPuntajes] = useState([0, 0]);
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
  let fire = puntajes[0],
    heart = puntajes[1];

  const endGame = (winner) => {
    setEndgame(true);
    if (winner === "fire") {
      fire++;
      setPuntajes([fire, heart]);
    } else if (winner === "heart") {
      heart++;
      setPuntajes([fire, heart]);
    }
  };

  const checkForWinner = (cuadrados) => {
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (!cuadrados[a] && !cuadrados[b] && !cuadrados[c]) return;
      else if (cuadrados[a] === cuadrados[b] && cuadrados[b] === cuadrados[c]) {
        setWinner([cuadrados[a], [a, b, c]]);
        endGame(cuadrados[a]);
      }
    }
  };
  const restartGame=()=>{
    setCells(Array(9).fill(""));
    setEndgame(false);
    setWinner(["", []]);
    setPlayer("fire");
  }
  const click = (index) => {
    if (endgame) return;
    let cuadrados = [...cells];
    if (cells[index] !== "") return;

    if (player === "fire") {
      cuadrados[index] = "fire";
      setPlayer("heart");
    } else {
      cuadrados[index] = "heart";
      setPlayer("fire");
    }

    checkForWinner(cuadrados);
    setCells(cuadrados);
  };

  return (
    <div>
      <div className="contenedor-principal">
        <div className="tabla-puntaje">
          <ScoreTable
            winner={winner}
            turn={player}
            puntajes={puntajes}
          ></ScoreTable>
        </div>

        <div className="contenedor-cuadrados">
          <div>
            <Square
              player={cells}
              click={click}
              winner={winner}
              index={0}
            ></Square>
            <Square
              player={cells}
              click={click}
              winner={winner}
              index={3}
            ></Square>
            <Square
              player={cells}
              click={click}
              winner={winner}
              index={6}
            ></Square>
          </div>
          <div>
            <Square
              player={cells}
              click={click}
              winner={winner}
              index={1}
            ></Square>
            <Square
              player={cells}
              click={click}
              winner={winner}
              index={4}
            ></Square>
            <Square
              player={cells}
              click={click}
              winner={winner}
              index={7}
            ></Square>
          </div>
          <div>
            <Square
              player={cells}
              click={click}
              winner={winner}
              index={2}
            ></Square>
            <Square
              player={cells}
              click={click}
              winner={winner}
              index={5}
            ></Square>
            <Square
              player={cells}
              click={click}
              winner={winner}
              index={8}
            ></Square>
          </div>
        </div>
        <div className="boton-reiniciar" onClick={() => restartGame()}>
          <button>
            <span></span>
            <span></span>
            <span></span>
            <span></span> Reiniciar
          </button>
        </div>
      </div>
    </div>
  );
};

export default SquaresTable;
