// rfce
import React from "react";
import "../styles/ScoreTable.css";

function ScoreTable({ winner, turn, puntajes }) {

  const puntuaciones = (puntajes) =>{
    if (puntajes[0] === 0 && puntajes[1] === 0) return "Tic Tac Toe"
    else return( puntajes[0] + " - " + puntajes[1] )
  }

  const mensaje = (winner, turn) => {
    let retornar;
    if (winner[0]) {
      if (winner[0] === "heart") retornar = "😍 Corazon es el Ganador 🎉";
      else retornar = "🔥 Fuego es el Ganador 😎";
    } else {
      if (turn === "fire") retornar = "Es el turno del Fuego 🔥";
      else retornar = "Es el turno del Corazon 💕";
    }
    return retornar;
  };

  return (
    <>
      <div className="score-container">
        <div>{ puntuaciones(puntajes) }</div>
        <div className="winner">{mensaje(winner, turn)}</div>
      </div>
    </>
  );
}

export default ScoreTable;
