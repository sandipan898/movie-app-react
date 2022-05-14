import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllTrendingsAction } from "../../redux/actions/MovieActions";
import MovieCard from "../common/MovieCard/MovieCard";
// import './dashboard.css';

const Trending = ({ getAllTrendingsAction, trendings }) => {
  useEffect(() => {
    console.log("trendings", trendings);
    if (!trendings || trendings?.length === 0) {
      getAllTrendingsAction();
    } 
  }, []);

  return (
    <div className='container-fluid'>
      <div className="movieCard">
        {trendings &&
          trendings.map((movie) => 
            <MovieCard
              key={movie.id}
              id={movie.id}
              poster={movie.poster_path}
              title={movie.title || movie.name}
              date={movie.first_air_date || movie.release_date}
              media_type={movie.media_type}
              vote_average={movie.vote_average}
            />
          )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    trendings: state.movies.trendings,
  };
};

const mapDispatchToProps = {
  getAllTrendingsAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Trending);
