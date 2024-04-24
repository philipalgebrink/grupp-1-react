// Importera logotyper från assets
// Ja man måste importera 1 o 1 tyvärr...

// Bas logotyper
import chipLogo from '../assets/chiplogo.svg';
import wifiLogo from '../assets/wifilogo.svg';

// Vendor logotyper
import bitcoinLogo from '../assets/bitcoinlogo.svg';
import ninjaLogo from '../assets/ninjalogo.svg';

// Definera vilken logotyp som används beroende på vendor namn
const vendorLogos = {
    bitcoin: bitcoinLogo,
    ninja: ninjaLogo,
};

export default function Card({ vendor, number }) {
    // Sätt rätt logo beroende på vendor
    const vendorlogoSrc = vendorLogos[vendor] || ''; // Kolla efter tomt om de inte definieras nån vendor och isf lämna tomt

    return(
    <div>
        {<img src={wifiLogo} alt="wifi" className="wifilogo"/>}
        {<img src={chipLogo} alt="chip" className="chiplogo"/>}
        {vendorlogoSrc && <img src={vendorlogoSrc} alt={`${vendor} Logo`} className="vendorlogo"/>}
        <h1 className="number">{number}</h1>
        <div className="namedate">
            <div className="line1">
                <p>CARDHOLDER NAME</p>
                <p>VALID THRU</p>
            </div>
            <div className="line2">
                <p>NAME</p>
                <p>DATE</p>
            </div>
        </div>
    </div>
    );
}