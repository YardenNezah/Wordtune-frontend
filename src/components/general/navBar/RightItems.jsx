import React from 'react'
import burgerMenu from '../../../images/menu.png';
import UrlLink from '../../layout/UrlLink';
import NavLink from '../../layout/NavLink';

const RightItems = () => {
    return (
        <>
            <div className="navigation-items">
                <NavLink location="plans" title="Plans" />
                <UrlLink location="https://app.wordtune.com/auth/signup" title="Get started" className="get-started-button" />
            </div>
            <div className="menu-button"><img src={burgerMenu} width="22" alt="menu" className="menu-icon"></img></div>
        </>
    )
}

export default RightItems