import logo from './logo.svg';
import './App.css';

/*
a heading 1 element
another paragraph element
an unordered list with 3 list items
*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Niki's H1 Element</h1>
        <p>My first paragraph element</p>
        <p>
          I changed this paragraph element
        </p>
        <ul>
          <li>First item</li>
          <li>Second item</li>
          <li>Third item</li>
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
