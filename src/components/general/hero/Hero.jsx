import React from 'react'
import CompaniesHero from './CompaniesHero';
import MainHero from './MainHero';
import MobileHero from './MobileHero';

const Hero = () => {
    return (
        <div className="hero">
            <MainHero />
            <MobileHero />
            <CompaniesHero />
        </div>
    )
}

export default Hero