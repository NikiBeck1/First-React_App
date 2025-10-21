import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ['ready', 'set', 'GO'],
      text: ''
    };
  }

  render() {
    return (
      <div>
        <form>
        <input
          value={this.state.text}
          onChange={(e) => this.setState({ text: e.target.value })}
        />
        <button
          onClick={() =>
            this.setState((state) => ({
              list: state.list.concat(state.text),
              text: ''
            }))
          }
        >
          Add
        </button>
        </form> 
        <ul>
          {this.state.list.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
