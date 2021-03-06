import React from 'react';
import './index.styles.css';

export const HeartDisplay = ({ hearts }) => {
    const renderHearts = (bombCount) => {
        const hearts = []
        for (let i = 0; i < bombCount; i++) {
            hearts.push(<i class="heartbeat icon"></i>)
        }
        return hearts;
    }
    return (
        <div id="heart-display-container">
            {renderHearts(hearts)}
        </div>)
}