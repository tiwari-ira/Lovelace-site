import logo from './assets/icons/logo.svg';
import './App.css';
import IconExample from './components/IconExample';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Your SVG Icons are now organized in the assets folder!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <IconExample />
    </div>
  );
}

export default App;
