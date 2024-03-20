import React from 'react'
import CompaniesHero from './CompaniesHero';
import MainHero from './MainHero';

const Hero = () => {
    return (
        <div className="hero">
            <MainHero />
            <CompaniesHero />
        </div>
    )
}

export default Hero