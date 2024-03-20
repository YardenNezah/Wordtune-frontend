import React from 'react'
import ScrollingText from './ScrollingText'

const ScrollingBanner = () => {
  return (
    <div className='scrolling-container'>
        <div className='scrolling-text-banner'>
          <ScrollingText />
          <ScrollingText />
          <ScrollingText />
          <ScrollingText />
          <ScrollingText />
          <ScrollingText />
      </div>
    </div>


  )
}

export default ScrollingBanner