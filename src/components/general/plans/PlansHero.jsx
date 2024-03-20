import React from 'react'
import FlexContainer from '../../layout/FlexContainer';
import TextContent from '../../layout/TextContent';
import UrlLink from '../../layout/UrlLink';
import plans from '../../../images/plans.png';

const PlansHero = () => {
    return (
        <div className='hero'>
            <FlexContainer>
                <div className="hero-content">
                    <div className="hero-text-content">
                        <h1><span className="font-general-sans">Our plans and pricing</span><br /> start free</h1>
                        <TextContent>
                            Find the plan that's right for you
                        </TextContent>
                    </div>
                    <UrlLink location="https://app.wordtune.com/auth/signup" title="Try Wordtune for free" />
                </div>
                <div className="hero-img"><img src={plans} alt="plans"></img></div>
            </FlexContainer>
        </div>
    )
}

export default PlansHero