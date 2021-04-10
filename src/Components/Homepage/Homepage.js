import React from 'react';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import Mainpage from './../Mainpage/Mainpage';
import classes from './Homepage.module.scss';

function Homepage() {
    return (
        <div className={classes.gridContainer}>
            <Header></Header>
            <Mainpage></Mainpage>
            <Footer></Footer>
        </div>
    )
}

export default Homepage;