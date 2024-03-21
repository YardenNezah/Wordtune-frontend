import React from 'react'
import UrlLink from './UrlLink'
import ListItem from './ListItem'

const Card = ({title, description, isDiscount, isRecommended, price, features}) => {
    return (
        <div className={isRecommended ? "card recommended-plan" : "card"}>
            {isRecommended && <div>RECOMMENDED</div>}
            <h2>{title}</h2>
            <p className='hero-paragraph'>{description}</p>
            {isDiscount && <strong className='discount-tag'> -60% </strong>}
            <h1>$ {price} <span>/ month</span> </h1>
            <UrlLink location="https://app.wordtune.com/auth/signup" title={isRecommended ? "Upgrade now" : "Get started"}></UrlLink>
            <ul>{features.map((feature) => <ListItem title={feature} key={feature}/>)}</ul>
        </div>
    )
}

export default Card