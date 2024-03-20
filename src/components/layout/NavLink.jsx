import React from 'react'
import { Link } from 'react-router-dom';

const NavLink = (props) => {
  return (
    <Link to={props.location} className={props.className}>
        {props.title}
    </Link>
  )
}

export default NavLink