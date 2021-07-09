import React from "react";
import "./MovieCard.css";
class Card extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="box">
        <a href="#" className="item"> <img src={movie.Poster}></img></a>
      </div>
    );
  }
}
export default Card;
