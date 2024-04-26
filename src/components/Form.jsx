import React from 'react';

const Form = ({ setCardNumber, setCardName, setCardVendor, setCardDate }) => {
  const handleNumberChange = (event) => {
    const formattedValue = event.target.value.replace(/\D/g, '');
    const formattedNumber = formattedValue.replace(/(\d{4})/g, '$1 ').trim();
    if (formattedNumber.length <= 19) {
      setCardNumber(formattedNumber);
    }
  };

  const handleCardNameChange = (event) => {
    if (event.target.value.length <= 22) {
      setCardName(event.target.value);
    }
  };

  const handleVendorChange = (event) => {
    setCardVendor(event.target.value);
  };

  const handleDateChange = (event) => {
    const selectedMonth = event.target.parentElement.querySelector('.month-dropdown').value;
    const selectedYear = event.target.parentElement.querySelector('.year-dropdown').value;
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
          if ((charCode < 48 || charCode > 57) || inputValue.length >= 16) {
            event.preventDefault();
          }
        }}
        onChange={handleNumberChange}
      />

      <label className="form-title">CARDHOLDER NAME</label>
      <input
        className="form-input"
        type="text"
        maxLength={22}
        onKeyPress={(event) => {
          const charCode = event.charCode;
          const inputValue = event.target.value;
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