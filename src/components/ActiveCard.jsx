import React from 'react';
import Card from './Card';

const ActiveCard = ({ vendor, number, handleClick }) => {
    return (
        <div className="activeCard">
            <Card
                vendor={vendor}
                number={number}
                handleClick={handleClick}
                active={true} // Sätt aktiv prop till aktivt kort
            />
        </div>
    );
};

export default ActiveCard;