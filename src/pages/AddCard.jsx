import './App.css';
import Header from '../components/Header';
import Card from '../components/Card';
import Form from '../components/Form';
import Button from '../components/Button';

function AddCard() {
  return (
    <div className="App">
      <Header title="ADD A NEW BANK CARD" />
      <Card />
      <Form />
      <Button />
    </div>
  );
}

export default AddCard;