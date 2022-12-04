import logo from './logo.svg';
import './App.css';
import ComponetA from './components/component_a';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <ComponetA></ComponetA>
        </div>
      </header>
    </div>
  );
}

export default App;
