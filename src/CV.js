import React from 'react';
import './Header.css';
import Background from './img/background1.jpeg';
import { Document } from 'react-pdf'

function CV(props) {
    return (
        <div>
            <Document file="./pdf/CV AUTRE.pdf" />
        </div>
    );
}

export default CV;