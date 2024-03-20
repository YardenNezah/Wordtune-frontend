import React from 'react'

const UrlLink = (props) => {
    return (
        <a href={props.location} target="_blank" className={`cta-button ${props.className}`}>
            {props.title}
        </a>
    )
}

export default UrlLink