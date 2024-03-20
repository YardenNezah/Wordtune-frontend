import React from 'react'
import UrlLink from '../../layout/UrlLink';

const MobileHero = () => {
  return (
    <div className='mobile-hero'>
         <UrlLink location="https://app.wordtune.com/auth/signup" title={"Get started"}></UrlLink>
        <p className="hero-paragraph">Try Wordtune for free. No credit card required.</p>
    </div>
  )
}

export default MobileHero