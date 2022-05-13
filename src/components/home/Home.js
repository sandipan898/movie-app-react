import React from "react";
import { OverlayTrigger, Tooltip, Button } from "react-bootstrap";
import Tables from "./Tables";
import "./home.css";

const Home = () => {
  return (
    <div className="home-main">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip id={`tooltip-top}`}>Refresh category</Tooltip>
                }
              >
                <Button variant="primary">
                  <i className="fa fa-rotate-right"></i>
                </Button>
              </OverlayTrigger>
            </div>
            <div className="card-body">
              <Tables />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip id={`tooltip-top}`}>Refresh category</Tooltip>
                }
              >
                <Button variant="primary">
                  <i className="fa fa-rotate-right"></i>
                </Button>
              </OverlayTrigger>
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
