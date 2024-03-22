import React from 'react'
import loader from '../../images/loader.svg';

const Loader = () => {
  return (
    <div className='data-container'><img src={loader} alt="loading..."></img></div>
  )
}

export default Loader;