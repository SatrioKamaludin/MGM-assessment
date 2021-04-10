import React from 'react';
import classes from './Footer.module.scss';

function Footer() {
    return (
        <footer className={classes.wrapper}>
            <div className={classes.internalWrapper}>
                <span className={classes.internalSpan}>
                    <p className={classes.footerStyles}>&copy; SATRIO KAMALUDIN</p>
                </span>
            </div>  
        </footer>
    )
}

export default Footer;