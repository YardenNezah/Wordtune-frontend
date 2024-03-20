import React, { useState } from 'react'
import UrlLink from '../../layout/UrlLink';
import NavLink from '../../layout/NavLink';

const RightItems = () => {
    const [navIsOpen, setNavIsOpen] = useState(false);

    return (
        <>
            <div className="navigation-right-items">
                <NavLink location="plans" title="Plans" className="plans-link" />
                <UrlLink location="https://app.wordtune.com/auth/signup" title="Get started" className="get-started-button" />
            </div>
            <div className={navIsOpen ? "burger-menu open" : "burger-menu"} onClick={() => setNavIsOpen(!navIsOpen)}>
                <div className="icon"></div>
            </div>
            {navIsOpen && <div className='mobile-nav-container'>
                <NavLink location="/" title="Home" />
                <NavLink location="plans" title="Plans" />
                <UrlLink location="https://app.wordtune.com/auth/signup" title="Get started" className="get-started-button" />
            </div>}
        </>
    )
}

export default RightItems