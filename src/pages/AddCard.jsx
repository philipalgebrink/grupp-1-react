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
      <NewCard />
      <SubHeader title="NEW CARD" />
      <Form />
      <Button title="ADD card" />
    </div>
  );
}

export default AddCard;