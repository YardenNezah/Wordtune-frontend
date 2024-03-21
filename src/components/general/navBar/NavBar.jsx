import RightItems from './RightItems';
import LeftItems from './LeftItems';
import { useState, useEffect } from 'react';

const NavBar = () => {
    const [stickyClass, setStickyClass] = useState(false);

    useEffect(() => {
      window.addEventListener('scroll', stickNavbar);
      return () => window.removeEventListener('scroll', stickNavbar);
    }, [stickyClass]);

    const stickNavbar = () => window.scrollY > 150 ? setStickyClass(true) : setStickyClass(false);      

    return (
        <nav className={stickyClass ? "sticky-nav" : ""}>
            <div className="navigation-items">
                <LeftItems />
                <RightItems />
            </div>
        </nav>
    )
}

export default NavBar