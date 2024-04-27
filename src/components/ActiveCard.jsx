import React from 'react';
import Card from './Card';

const ActiveCard = ({ vendor, number, name, date, handleClick }) => {
    return (
        <div className="activeCard">
            <Card
                vendor={vendor}
                number={number}
                name={name}
                date={date}
                handleClick={handleClick}
                active={true}
            />
        </div>
    );
};

export default ActiveCard;