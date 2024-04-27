import React from 'react';
import Card from './Card';

const ActiveCard = ({ vendor, number, name, date, ccv, handleClick }) => {
    return (
        <div className="activeCard">
            <Card
                vendor={vendor}
                number={number}
                name={name}
                date={date}
                ccv={ccv}
                handleClick={handleClick}
                active={true}
            />
        </div>
    );
};

export default ActiveCard;