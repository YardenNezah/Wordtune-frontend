import React from 'react'
import { Link } from 'react-router-dom';

const MobileNavLink = (props) => {
  return (
    <Link to={props.location} className="get-started-button mobile-nav-link">
        {props.title}
    </Link>
  )
}

export default MobileNavLink