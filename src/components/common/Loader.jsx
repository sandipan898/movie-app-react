import React from 'react'

const Loader = ({loadingText}) => {
  return (
    <div className="spinner-border text-primary" role="status">
      <span className="sr-only">{loadingText || 'Loading...'}</span>
    </div>
  )
}

export default Loader