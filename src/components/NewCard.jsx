import React from 'react';

// Importera logotyper från assets
// Ja man måste importera 1 o 1 tyvärr...

// Bas logotyper
import chipLogo from '../assets/chiplogo.svg';
import wifiLogo from '../assets/wifilogo.svg';

// Vendor logotyper
import bitcoinLogo from '../assets/bitcoinlogo.svg';
import ninjaLogo from '../assets/ninjalogo.svg';
import blockLogo from '../assets/blocklogo.svg';
import evilLogo from '../assets/evillogo.svg';

// Definera vilken logotyp som används beroende på vendor namn
const vendorLogos = {
    bitcoin: bitcoinLogo,
    ninja: ninjaLogo,
    block: blockLogo,
    evil: evilLogo,
};

const NewCard = ({ vendor, number, name, date, ccv }) => {
    const cardClassName = `card ${vendor}`;
    const vendorlogoSrc = vendorLogos[vendor] || '';

    // Ändra wifi loggan me filter om kortet är bitcoin (syns dåligt på bitcoin färgen) la även till att kolla efter ingen vendor för safety
    const isBitcoin = vendor === 'bitcoin' || " ";
    // Ändra färg på text me filter om kortet är ninja (svart på svart är inte bra)
    const isNinja = vendor === 'ninja';

    return (
        <div className={cardClassName}>
            <img src={wifiLogo} alt="wifi" className={`wifilogo ${isBitcoin ? '' : 'invert'}`} />
            <img src={chipLogo} alt="chip" className="chiplogo" />
            {vendorlogoSrc && <img src={vendorlogoSrc} alt={`${vendor} Logo`} className="vendorlogo" />}
            <h1 className={`number ${isNinja ? 'white-text' : ''}`}>{number || 'XXXX XXXX XXXX XXXX'}</h1>
            <div className="namedate">
                <div className="line1">
                    <p className={isNinja ? 'white-text' : ''}>CARDHOLDER NAME</p>
                    <p className={isNinja ? 'white-text' : ''}>VALID THRU</p>
                </div>
                <div className="line2">
                    <p className={isNinja ? 'white-text' : ''}>{name || 'Cardholder Name'}</p>
                    <p className={isNinja ? 'white-text' : ''}>{date || "01/24"}</p>
                </div>
            </div>
        </div>
    );
};

export default NewCard;
