import './App.css';
import '../reset.css';
import Header from '../components/Header';
import Card from '../components/Card';
import Button from '../components/Button';

function App() {
  return (
    <div className="App">
    <Header />
      <div className="card">
        <Card vendor="bitcoin" number="1234 5678 9101 1123"/>
      </div>
      <Button />
    </div>
  );
}

export default App;
