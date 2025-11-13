import React from 'react';
import './App.css';
import FilmsList from './components/filmsList.jsx';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [list, setList] = React.useState([]);
  const [text, setText] = React.useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    setList((prevList) => prevList.concat(text));
    setText('');
  };

  return (
    <Router>  
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/films">Films</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/films" element={<FilmsList />} />
        <Route path="/" element={<h1>Add More Films</h1>} />
      </Routes>
      
      <div>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder='Enter Film Name'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <FilmsList />
    </div>
    </Router>
  );
}


export default App;
