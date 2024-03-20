import React from 'react'
import UrlLink from './UrlLink'
import ListItem from './ListItem'
import TextContent from './TextContent';

const Card = (props) => {
    return (
        <div className='card'>
            <h2>{props.title}</h2>
            <TextContent>{props.description}</TextContent>
            {props.isDiscount && <span> 60% </span>}
            <UrlLink location="https://app.wordtune.com/auth/signup" title={props.isRecommeded ? "Upgrade now" : "Get started"}></UrlLink>
            <ul>{props.features.map((feature) => <ListItem title={feature} key={feature}/>)}</ul>
        </div>
    )
}

export default Card