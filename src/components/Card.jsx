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

export default function Card({ vendor, number }) {
    // Sätt korrekt färg och logotyp för kort
    const cardClassName = `card ${vendor}`;
    const vendorlogoSrc = vendorLogos[vendor] || '';
  
    return (
      <div className={cardClassName}>
        <img src={wifiLogo} alt="wifi" className="wifilogo" style={{ filter: vendor === 'bitcoin' ? 'none' : 'invert(1)' }}/>
        <img src={chipLogo} alt="chip" className="chiplogo" />
        {vendorlogoSrc && <img src={vendorlogoSrc} alt={`${vendor} Logo`} className="vendorlogo" />}
        <h1 className="number">{number}</h1>
        <div className="namedate">
          <div className="line1">
            <p>CARDHOLDER NAME</p>
            <p>VALID THRU</p>
          </div>
          <div className="line2">
            <p>Philip Älgebrink</p>
            <p>12/24</p>
          </div>
        </div>
      </div>
    );
  }