import React from 'react'

const AboutPage = () => {
  return (
    <div className='container-fluid'>
      <h1 className="display-4 mt-5 text-light">About Movie Gallery</h1>
      <h4 className="my-2 text-light">Explore trending and your favourite movies in one place</h4>
      <div className='container mt-4 text-white'>
        <h4 className="my-2">Features:</h4>
          <ul>
            <li>Expore all Trending Movies</li>
            <li>Expore all Genres</li>
            <li>Expore all Movies by Genres</li>
            <li>Infinite Scrolling</li>
          </ul>
      </div>
    </div>
  )
}

export default AboutPage