import './App.css';
import '../reset.css';
import Header from '../components/Header';
import Card from '../components/Card';
import Button from '../components/Button';
import Form from '../components/Form';

function App() {
  return (
    <div className="App">
    <Header />
    <p className="title">ACTIVE CARD</p>
      <Card vendor="bitcoin" number="1234 5678 9101 1123"/>
      <Card vendor="ninja" number="1234 5678 9101 1123"/>
      <Card vendor="block" number="1234 5678 9101 1123"/>
      <Card vendor="evil" number="1234 5678 9101 1123"/>
      <Button />
      <Form />
    </div>
  );
}

export default App;
