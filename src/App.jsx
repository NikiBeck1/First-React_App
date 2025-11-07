import React from 'react';
import './App.css';
import FilmsList from './components/filmsList.jsx';

function App() {
  const [list, setList] = React.useState(['ready', 'set', 'GO']);
  const [text, setText] = React.useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    setList((prevList) => prevList.concat(text));
    setText('');
  };

  return (
    <div>
      <form onSubmit={handleAdd}>
        <input
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
  );
}


export default App;
