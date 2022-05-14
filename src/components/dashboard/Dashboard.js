import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllTrendingsAction } from "../../redux/actions/MovieActions";

const Dashboard = ({ getAllTrendingsAction, movies }) => {
  useEffect(() => {
    console.log("movies", movies);
    if (movies?.length === 0) {
      getAllTrendingsAction();
    }
  }, [movies]);

  return (
    <div>
      <div class="container">
        {/* <div class="row">
          <div className="col-md-3 col-sm-12">One of three columns</div>
          <div className="col-md-3 col-sm-12">One of three columns</div>
          <div className="col-md-3 col-sm-12">One of three columns</div>
        </div> */}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

const mapDispatchToProps = {
  getAllTrendingsAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
