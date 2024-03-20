import React from 'react'
import vector from "../../../images/Vector.svg";

const ScrollingText = () => {
    const scrollingText = "Reach your professional potential";
    return (
       <>
            <p>{scrollingText}</p>
            <img src={vector} width="auto" alt={scrollingText}></img>
        </>


    )
}

export default ScrollingText