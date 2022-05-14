import React, { useCallback, useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import useFetchMovies from "../../hooks/useFetchMovies";
import { getMoviesAction } from "../../redux/actions/MovieActions";
import MovieCard from "../common/MovieCard/MovieCard";
import Loader from "../common/Loader";
import "./dashboard.css";

const Dashboard = ({ getMoviesAction }) => {
  // useEffect(() => {
  //   console.log("movies", movies);
  //   if(!movies || movies?.length === 0) {
  //     getMoviesAction();
  //   }
  // }, []);


  const [pageNumber, setPageNumber] = useState(1);

  const { loading, error, movies, hasMore } = useFetchMovies(pageNumber);

  const observer = useRef();

  const lastBookElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <div className="container-fluid">
      <div className="movieCard">
        {movies &&
          movies.map((movie, index) =>
            movies.length - 1 === index ? (
              <div ref={lastBookElementRef} key={movie}>
                <MovieCard
                  key={movie.id}
                  id={movie.id}
                  poster={movie.poster_path}
                  title={movie.title || movie.name}
                  date={movie.first_air_date || movie.release_date}
                  media_type={movie.media_type}
                  vote_average={movie.vote_average}
                />
              </div>
            ) : (
              <div key={movie}>
                <MovieCard
                  key={movie.id}
                  id={movie.id}
                  poster={movie.poster_path}
                  title={movie.title || movie.name}
                  date={movie.first_air_date || movie.release_date}
                  media_type={movie.media_type}
                  vote_average={movie.vote_average}
                />
              </div>
            )
          )}
      </div>
      <div align='center' className="text-white">{loading && <Loader loadingText='Loading movies' />}</div>
      <div>{error && 'Error'}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    movies: state.movies.movies,
  };
};

const mapDispatchToProps = {
  getMoviesAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
