import './App.css';
import Header from '../components/Header';
import Card from '../components/Card';
import Form from '../components/Form';
import Button from '../components/Button';
import NewCard from '../components/NewCard';
import SubHeader from '../components/SubHeader';

function AddCard() {
  return (
    <div className="App">
      <Header title="ADD A NEW BANK CARD" />
      <SubHeader title="NEW CARD" />
      <NewCard />
      <Form />
      <Button title="ADD CARD" />
    </div>
  );
}

export default AddCard;