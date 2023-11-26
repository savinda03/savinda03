import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js  gammak thamai</code> and save to reload.
          
        </p>
        <h2>haane</h2>
        <form action="" method="post">
          <label for="uname">uname</label><br/>
          <input type="text" className="text" /><br />
          <label for="password">password</label><br />
          <input type="text" className="text" />
    
        </form>
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
