import React from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onclick} className="cta-button">{props.title}</button>
  )
}

export default Button