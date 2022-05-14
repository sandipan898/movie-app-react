import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getMoviesAction } from "../../redux/actions/MovieActions";
import MovieCard from "../common/MovieCard/MovieCard";
import './dashboard.css';

const Dashboard = ({ getMoviesAction, movies }) => {
  useEffect(() => {
    console.log("movies", movies);
    // if (!trendings || trendings?.length === 0) {
    //   getAllTrendingsAction();
    // }
    if(!movies || movies?.length === 0) {
      getMoviesAction();
    } 
  }, []);

  return (
    <div className='container-fluid'>
      <div className="movieCard">
        {movies &&
          movies.map((movie) => 
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
    movies: state.movies.movies,
  };
};

const mapDispatchToProps = {
  getMoviesAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
