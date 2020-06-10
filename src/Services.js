import React from 'react';

import './Services.css'

function Services() {
    return (
        <div className="services" >
            <h3>Portfolio</h3>
            <h2>What am I trying to convey with this</h2>
            <div className="row">
                <Icons icon={iconObj[0].icon} title={iconObj[0].title} description={iconObj[0].description} />
                <Icons icon={iconObj[1].icon} title={iconObj[1].title} description={iconObj[1].description} />
                <Icons icon={iconObj[2].icon} title={iconObj[2].title} description={iconObj[2].description} />
                <Icons icon={iconObj[3].icon} title={iconObj[3].title} description={iconObj[3].description} />
            </div>
        </div>
    );
}

const iconObj = [
    {
        icon: <ion-icon name="calculator-outline"></ion-icon>,
        title: 'Technical',
        description: 'A way to demonstrate how I manage applied problems'
    },
    {
        icon: <ion-icon name="game-controller-outline"></ion-icon>,
        title: 'Interactivity',
        description: 'Show my enthusiasm for human-machine interaction'
    },
    {
        icon: <ion-icon name="hammer-outline"></ion-icon>,
        title: 'Resourcefulness',
        description: 'This is a display of what I\'ve done yet'
    },
    {
        icon: <ion-icon name="link-outline"></ion-icon>,
        title: 'Contact',
        description: 'Are we keeping in touch ?'
    }
];

function Icons(props) {
    return (
        <div>
            <span>
                {props.icon}
            </span>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
        </div>
    );
}

export default Services;