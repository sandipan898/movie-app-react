import React from "react";
import { Badge } from "react-bootstrap";
import { img_300, unavailable } from "../../../config/config";
import "./MovieCard.css";

const MovieCard = ({ id, poster, title, date, media_type, vote_average }) => {
  return (
    <div className="media text-white">
      <Badge
        style={{ width: "4rem", marginBottom: "0.5rem" }}
        pill
        bg={vote_average > 6 ? "primary" : "danger"}
      >
        <i class="fa fa-star"></i> {vote_average}
      </Badge>
      <img
        className="poster"
        src={poster ? `${img_300}${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className="subTitle">{date}</span>
      </span>
    </div>
  );
};

export default MovieCard;
