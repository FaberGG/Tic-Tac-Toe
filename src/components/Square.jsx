import React from "react";
import "../styles/Square.css";
import { FaFireAlt } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

function Square({ player, index, click, winner }) {
  const claseWinner = (winner, index) => {
    for (let i = 0; i < winner.length; i++) {
      if (winner[i] == null) {
        return ""
      } else {
        if (winner[i] === index) return "ganador";
      }
    }
    return "";
  };

  return (
    <>
      <div className="square" onClick={() => click(index)}>
        <FaFireAlt
          className={`fire ${
            player[index] === "fire" ? "" : "hide"
          } ${claseWinner(winner[1], index)}`}
        />
        <FaRegHeart
          className={`heart ${
            player[index] === "heart" ? "" : "hide"
          } ${claseWinner(winner[1], index)}`}
        />
      </div>
    </>
  );
}
export default Square;
