import { useState } from "react";

export default function Form() {
  const [number, setNumber] = useState("");
  const handleChange = (event) => {
    setNumber(event.target.value);
  };
  return (
    <form className="form">
      <label className="form-title">CARD NUMBER</label>
      <input
        className="form-input"
        type="text"
        value={number}
        onChange={handleChange}
      />
      <p>{number}</p>
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
        <option value="#">1</option>
        <option value="#">2</option>
        <option value="#">3</option>
        <option value="#">4</option>
      </select>
    </form>
  );
}
