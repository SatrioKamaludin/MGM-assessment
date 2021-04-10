import React from 'react';
import classes from './Header.module.scss'

function Header () {
    return (
        <header className={classes.NavBar}>
            <h1>Stock Image Browser</h1>
        </header>
    )
}

export default Header;