import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import ExploreMovies from '../components/explore/ExploreMovies'

const ExplorePage = () => {
    // const params = useParams();
    const location = useLocation();
  return (
    <div className='container-fluid'>
        <h1 className="display-4 my-5 text-light">{location.state?.genreName} Movies</h1>
        <ExploreMovies genre={location.state?.genreId} />
    </div>
  )
}

export default ExplorePage