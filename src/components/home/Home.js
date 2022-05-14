/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { getAllGenresAction, clearStateAction } from "../../redux/actions/MovieActions";
import { OverlayTrigger, Tooltip, Button } from "react-bootstrap";
import Tables from "./Tables";
import "./home.css";

const Home = ({ getAllGenresAction, clearStateAction, genres }) => {
  const [loadingTable, setLoadingTable] = useState('both');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log('genres', genres);
    if(!genres || genres?.length === 0) {
      getAllGenresAction();
    }
  }, []);

  const handleRefresh = (e, position) => {
    setLoadingTable(position);
    setLoading(true);
    setTimeout(() => {
      getAllGenresAction()
      .then(() => {
        setLoading(false);
      });
    }, 500);
    // getAllGenresAction();
  }
  
  return (
    <div className="container home-main">
      <div className="row">
        <div className="col-md-6">
          <div className="card bg-dark mb-5">
            <div className="card-header">
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip id='refresh1'>Refresh Genre</Tooltip>
                }
              >
                <Button variant="primary" onClick={(e) => handleRefresh(e, 'left')}>
                  <i className="fa fa-rotate-right"></i>
                </Button>
              </OverlayTrigger>
            </div>
            <div className="card-body">
              <Tables data={genres} loading={genres?.length === 0 || (loading && loadingTable === 'left')}  />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card bg-dark mb-5">
            <div className="card-header">
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip id='refresh2'>Refresh Genre</Tooltip>
                }
              >
                <Button variant="primary" onClick={(e) => handleRefresh(e, 'right')}>
                  <i className="fa fa-rotate-right"></i>
                </Button>
              </OverlayTrigger>
            </div>
            <div className="card-body">
              <Tables data={genres} loading={genres?.length === 0 || (loading && loadingTable === 'right')} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const mapStateToProps = (state) => {
  console.log('state', state);
  return {
      genres: state.movies.genres
  };
};

const mapDispatchToProps = {
  getAllGenresAction,
  clearStateAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

