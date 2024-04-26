import './App.css';
import Header from '../components/Header';
import Form from '../components/Form';
import Button from '../components/Button';
import SubHeader from '../components/SubHeader';

function AddCard() {
  return (
    <div className="App">
      <Header title="ADD A NEW BANK CARD" />
      <SubHeader title="NEW CARD" />
      <Form />
      <Button title="ADD CARD" />
    </div>
  );
}

export default AddCard;