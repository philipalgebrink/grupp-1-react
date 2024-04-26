import React from 'react';
import chipLogo from '../assets/chiplogo.svg';
import wifiLogo from '../assets/wifilogo.svg';

const NewCard = ({ vendor, cardNumber, name }) => {
    const cardClassName = `card ${vendor}`;

    return (
        <div className={cardClassName}>
            <img src={wifiLogo} alt="wifi" className="wifilogo" />
            <img src={chipLogo} alt="chip" className="chiplogo" />
            <h1 className="number">{cardNumber || 'XXXX XXXX XXXX XXXX'}</h1>
            <div className="namedate">
                <div className="line1">
                    <p>CARDHOLDER NAME</p>
                    <p>VALID THRU</p>
                </div>
                <div className="line2">
                    <p>{name || 'Cardholder Name'}</p>
                    <p>12/24</p>
                </div>
            </div>
        </div>
    );
};

export default NewCard;