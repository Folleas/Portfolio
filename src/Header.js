import React from 'react';
import './Header.css';
import Background from './img/background1.jpeg';

const myStyles = {
    backgroundImage: `url( ${Background} )`,
    height: '50vh',
    backgroundSize: 'cover'
}

function Header(props) {
    return (
        <header style= {myStyles}>
            <h1> {props.title} </h1>
            <p>Mon petit portfolio des familles</p>
            <a href="#button"> {props.button} </a>
        </header>
    );
}

export default Header;