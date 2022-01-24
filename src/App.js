import logo from './logo.svg';
import './App.css';
import Button from './components/button/button'

function App() {
  return (
    <div className="App">
      <Button text="Sample back button" back />
      <Button text="Sample button" />
    </div>
  );
}

export default App;
