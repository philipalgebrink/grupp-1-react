import NewCard from "./NewCard";
import { useState } from "react";

export default function Form() {
  const [cardNumber, setCardNumber] = useState("");
  const handleChange = (event) => {
    setCardNumber(event.target.value);
  };
  return (
    <form className="form">
      <NewCard cardNumber={cardNumber} />
      <label className="form-title">CARD NUMBER</label>
      <input
        className="form-input"
        type="text"
        value={cardNumber}
        onChange={handleChange}
      />
      <label className="form-title">CARDHOLDER NAME</label>
      <input
        className="form-input"
        type="text"
      />
      <section className="form-section">
        <label className="form-title">VALID THRU</label>
        <label className="form-title">CCV</label>
        <input className="form-input" type="text" />
        <input className="form-input" type="text" />
      </section>
      <label className="form-title">VENDOR</label>
      <select className="form-input" name="#" id="#">
        <option value="#">Bitcoin</option>
        <option value="#">Ninja</option>
        <option value="#">Block</option>
        <option value="#">Evil</option>
      </select>
    </form>
  );
}
