import React, { useState, useEffect } from 'react';
import search from '../img/magnifying-glass.svg'

export default function Header() {
    const [menuOpen, setMenuOpen ] = useState(false);
    const [toggleBars, setToggleBars ] = useState([]);

    const sidebarStyles = menuOpen ? 'menu menu_open' : 'menu'
    const dimmerStyles = menuOpen ? 'dimmer dimmer_open' : 'dimmer'

    const lockScroll = () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop
        let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft

        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop)
        }
    }

    const unlockScroll = () => {
        window.onscroll = function() {}
    }

    useEffect(() => {
        let toggleArray = ['','','']
        toggleArray.fill('toggle__bar')

        if(menuOpen){
            window.scrollTo(0,0)
            lockScroll()
            for(let i=0;i<3; i++){
                toggleArray[i] = toggleArray[i] + ` toggle__bar_${i} toggle__bar_open`
            }
            setToggleBars(toggleArray)
        }
        else{
            unlockScroll()
            for(let i=0;i<3; i++){
                toggleArray[i] = toggleArray[i] + ` toggle__bar_${i}`
            }
            setToggleBars(toggleArray)
        } 

    }, [menuOpen]);

    return(
        <header className="header">
            <div className={dimmerStyles}></div>
            <button className="toggle" onClick={() => setMenuOpen(!menuOpen)}>
                {toggleBars.map((bar, i) => {
                    const key = `bar--${i}`

                    return(
                        <div key={key} className={bar}></div>
                    )
                })}
            </button>

            <nav className={sidebarStyles}>
                <ul className="menu__list">
                    <li className="menu__item"><a className="menu__link" href="#" onClick={() => menuOpen ? setMenuOpen(!menuOpen) : null}>Home</a></li>
                    <li className="menu__item"><a className="menu__link" href="#" onClick={() => menuOpen ? setMenuOpen(!menuOpen) : null}>Tutoring</a></li>
                    <li className="menu__item"><a className="menu__link" href="#" onClick={() => menuOpen ? setMenuOpen(!menuOpen) : null}>Workshops</a></li>
                    <li className="menu__item"><a className="menu__link" href="#" onClick={() => menuOpen ? setMenuOpen(!menuOpen) : null}>About Us</a></li>
                    <li className="menu__item"><a className="menu__link" href="#" onClick={() => menuOpen ? setMenuOpen(!menuOpen) : null}>Volunteer</a></li>
                    <li className="menu__item"><a className="menu__link" href="#" onClick={() => menuOpen ? setMenuOpen(!menuOpen) : null}>Donate</a></li>
                </ul>
            </nav>

            <figure className="logo">
                <a className="logo__link" href="#"></a>
            </figure>
            <form className="search-bar">
                <button className="search-bar__button">
                    <img className="search-bar__button-icon" src={search} alt="search" />
                </button>
                <input className="search-bar__input" placeholder="Search" />
            </form>
        </header>
    )
}