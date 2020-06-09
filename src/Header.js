import React from 'react';
import './Header.css';
import Background from './img/background1.jpeg';

const myStyles = {
    height: '50vh',
    backgroundSize: 'cover'
}

function Header(props) {
    return (
        <header style= {myStyles}>
            <h1> {props.title} </h1>
            <p>Rayann Folleas</p>
            {/* <a href="#button"> {props.button} </a> */}
        </header>
    );
}

export default Header;