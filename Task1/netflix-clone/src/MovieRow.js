import React from "react";
import "./MovieRow.css";

function MovieRow({ title, movies }) {
  return (
    <div className="movie-row">
      <h3>{title}</h3>
      <div className="movie-posters">
        {movies.map((url, index) => (
          <img key={index} src={url} alt={`Movie ${index}`} className="poster" />
        ))}
      </div>
    </div>
  );
}

export default MovieRow;
