import './App.css';
import Header from '../components/Header';
import Card from '../components/Card';
import Form from '../components/Form';
import Button from '../components/Button';
import SubHeader from '../components/SubHeader';

function AddCard() {
  return (
    <div className="App">
      <Header title="ADD A NEW BANK CARD" />
      <SubHeader title="NEW CARD"/>
      <Card />
      <Form />
      <Button title="ADD card"/>
    </div>
  );
}

export default AddCard;