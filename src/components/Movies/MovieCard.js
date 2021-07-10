import React from "react";
import { Button } from "../Button";
import "./MovieCard.css";

const Card = (props) => {
  const { movie } = props;
  return (
    <div className="box">
      <a href="#" className="item">
        <img src={movie.Poster} alt="images"></img>
      </a>
    </div>
  );
};
export default Card;
