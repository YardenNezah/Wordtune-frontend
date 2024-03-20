import React from 'react'
import FlexContainer from '../../layout/FlexContainer'
import UrlLink from '../../layout/UrlLink';
import hero from '../../../images/hero.png';
import TextContent from '../../layout/TextContent';

const MainHero = () => {
    return (
        <FlexContainer>
            <div className="hero-content">
                <div className="hero-text-content">
                    <h1>Consume <br />More With an <span className="font-general-sans">AI Summarization Tool</span></h1>
                    <TextContent>
                        Maximize your efficiency by summarizing articles, videos and more.
                    </TextContent>
                </div>
                <UrlLink location="https://app.wordtune.com/auth/signup" title="Try Wordtune for free" />
            </div>
            <div className="hero-img"><img src={hero} alt="hero"></img></div>
        </FlexContainer>
    )
}

export default MainHero;