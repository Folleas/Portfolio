import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';

const sides = {
    top: 0, // Sticks when it scrolls past the top edge
    bottom: 0, // Sticks when it scrolls past the bottom edge
    left: 10, // Sticks 10px from the left edge
    right: -20, // Sticks 20px past the right edge (useful for content that should stick only when it's fully out of the frame)
};

class ContactSticky extends React.Component {
    render() {
        return (
            <div>
                <Sticky sides={sides}>
                    <h1>Ouisticky</h1>
                </Sticky>
            </div>
        );
    }
};

export default ContactSticky;