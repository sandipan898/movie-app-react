import React from "react";
import { Link } from "react-router-dom";
import Loader from '../common/Loader';

const Tables = ({ data, loading }) => {
  return (
    <table className="table text-light">
      <thead>
        <tr>
          <th style={{ background: '#09006e' }} className="h4 text-center p-4" scope="col">Genre Name</th>
        </tr>
      </thead>
      <tbody> 
        { loading 
          ? <div align='center'>
              <Loader loadingText='Loading Genres' />
            </div>
          : data && data.map(({id, name}) => (
            <tr className="text-center card my-2" style={{ background: '#0f37ff' }} key={id}>
              <div className="card py-3">
                <h5 className="card-body">
                  {name}
                </h5>
                <div className="card-footer">
                  <Link className="btn btn-sm btn-secondary" state={{'genreName': name, genreId: id}} to={`/explore/${name.toLowerCase()}`}>Explore Movies</Link>
                </div>
              </div>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Tables;
