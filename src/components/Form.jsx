import React from 'react';

const Form = ({ setCardNumber, setCardName, setCardVendor, setCardDate, setCardCcv }) => {
  // Hantera ändringar i kortnumret
  const handleNumberChange = (event) => {
    // Formatera inkommande nummer genom att ta bort alla icke-siffror och lägga till mellanslag var 4:e tecken
    const formattedValue = event.target.value.replace(/\D/g, '');
    const formattedNumber = formattedValue.replace(/(\d{4})/g, '$1 ').trim();
    // Kontrollera att numret inte överstiger 16 (19 pga mellanslag) tecken
    if (formattedNumber.length <= 19) {
      setCardNumber(formattedNumber);
    }
  };

  // Hantera ändringar i kortinnehavarens namn
  const handleCardNameChange = (event) => {
    // Kontrollera att namnet inte överstiger 22 tecken
    if (event.target.value.length <= 22) {
      setCardName(event.target.value);
    }
  };

  // Hantera ändringar i CCV
  const handleCardCcvChange = (event) => {
    // Kontrollera att CCV inte överstiger 3 tecken
    if (event.target.value.length <= 3) {
      setCardCcv(event.target.value);
    }
  };

  const handleVendorChange = (event) => {
    setCardVendor(event.target.value);
  };

  // Hantera ändringar i vald månad och år
  const handleDateChange = (event) => {
    // Hämta vald månad och år från dropdown-menyer
    const selectedMonth = event.target.parentElement.querySelector('.month-dropdown').value;
    const selectedYear = event.target.parentElement.querySelector('.year-dropdown').value;

    // Formatera datumet i formatet "MM/YY" och skicka till funktionen för att uppdatera kortets datum
    const formattedDate = `${selectedMonth}/${selectedYear}`;
    setCardDate(formattedDate);
  };

  return (
    <form className="form">
      <label className="form-title">CARD NUMBER</label>
      <input
        className="form-input"
        type="numeric"
        maxLength={16}
        onKeyPress={(event) => {
          const charCode = event.charCode;
          const inputValue = event.target.value;
          // Tillåt endast siffror och max 16 tecken
          if ((charCode < 48 || charCode > 57) || inputValue.length >= 16) {
            event.preventDefault();
          }
        }}
        onChange={handleNumberChange}
      />

      <label className="form-title">CARDHOLDER NAME</label>
      {/* Input-fält för kortinnehavarens namn, med begränsning till 22 tecken */}
      <input
        className="form-input"
        type="text"
        maxLength={22}
        onKeyPress={(event) => {
          const charCode = event.charCode;
          const inputValue = event.target.value;
          // Tillåt endast bokstäver och mellanslag, max 22 tecken
          if ((charCode >= 48 && charCode <= 57) || inputValue.length >= 22) {
            event.preventDefault();
          }
        }}
        onChange={handleCardNameChange}
      />
      <div className="form-container">
        <div className="form-input-group">
          <label className="form-validthru">VALID THRU</label>
          <div className="form-date-container">
            <select className="form-dropdown month-dropdown" defaultValue="01" onChange={handleDateChange}>
              {Array.from({ length: 12 }, (_, index) => {
                const month = (index + 1).toString().padStart(2, '0');
                return (
                  <option key={month} value={month}>
                    {month}
                  </option>
                );
              })}
            </select>
            <select className="form-dropdown year-dropdown" defaultValue="24" onChange={handleDateChange}>
              {Array.from({ length: 7 }, (_, index) => {
                const year = (24 + index).toString();
                return (
                  <option key={year} value={year}>
                    {year}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="form-input-group">
          <label className="form-ccv">CCV</label>
          <div>
            <input
              className="form-input"
              type="numeric"
              maxLength={3}
              onKeyPress={(event) => {
                const charCode = event.charCode;
                const inputValue = event.target.value;
                if ((charCode < 48 || charCode > 57) || inputValue.length >= 3) {
                  event.preventDefault();
                }
              }}
              onChange={handleCardCcvChange}
            />
          </div>
        </div>
      </div>
      <label className="form-title">VENDOR</label>
      <select
        className="form-input"
        onChange={handleVendorChange}
      >
        <option value="">None</option>
        <option value="bitcoin">Bitcoin</option>
        <option value="ninja">Ninja</option>
        <option value="block">Block</option>
        <option value="evil">Evil</option>
      </select>
    </form>
  );
};

export default Form;