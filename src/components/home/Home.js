import React from "react";
import Tables from "./Tables";
import "./home.css";

const Home = () => {
  return (
    <div className="home-main">
      <div class="row">
        <div class="col-md-6">
          <div className="card">
            <div className="card-header">
              <button dataToggle="tooltip" dataPlacement="top" title="Refresh" className="btn btn-primary">
                <i class="fa fa-rotate-right"></i>
              </button>
            </div>
            <div className="card-body">
              <Tables />
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div className="card">
            <div className="card-header">
              <button className="btn btn-primary">
                <i class="fa fa-rotate-right"></i>
              </button>
            </div>
            <div className="card-body">
              <Tables />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
