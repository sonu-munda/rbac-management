import React, { useState, useLayoutEffect, useEffect } from 'react'
import '../styles/appbar.css'
import '../styles/tooltips.css'

export default function Appbar() {

    let [displayingIcon, setDisplayingIcon] = useState(false);
    const [width, height] = useWindowSize();

    const onMenuTap = () => {
        setDisplayingIcon(!displayingIcon)
    }

    useEffect(() => {
        if (displayingIcon && width <= 767) {
            setDisplayingIcon(false)
        } else if (!displayingIcon && width > 767) {
            setDisplayingIcon(true)
        }
    }, [width])

    return (

        <header className="appbar">
            <img src={displayingIcon ? 'close.png' : 'menu.png'} className='menu-icon' onClick={onMenuTap} />
            <h1>RBAC Management System</h1>
            {displayingIcon && <div className='tooltip'>
                <div className='logged-in-user'>
                    <img src='profile-user.png' />
                    <span className='logout-button'>LOGOUT</span>
                </div>
                <span className="tooltiptext">sonu@gmail.com</span>
            </div>}
        </header>
    )
}

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}