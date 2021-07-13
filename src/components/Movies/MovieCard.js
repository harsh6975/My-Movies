import React from "react";
import { addfavourite, deletefavourite } from "../../Redux/Action/type";
import "./MovieCard.css";

const Card = (props) => {
  const hanleFav = () => {
    const { movie } = props;
    props.dispatch(addfavourite(movie));
  };
  const hanleUnFav = () => {
    console.log('Unfav');
    const { movie } = props;
    props.dispatch(deletefavourite(movie));
  };

  const { movie } = props;
  return (
    <div className="box">
      <div href="#" className="item">
        <h1 style={{color:'white',paddingBottom:5,textAlign:"center"}}>{movie.Title}</h1>
        <img src={movie.Poster} alt="images"></img>
      </div>
      <div className="butt">
        <button className="fbut">Watch</button>
        {!props.isfav ? (
          <button className="fbut" onClick={hanleFav}>
            Favourite
          </button>
        ) : (
          <button className="fbut" onClick={hanleUnFav}>
            Unfavourite
          </button>
        )}
      </div>
    </div>
  );
};
export default Card;
