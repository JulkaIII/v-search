import logo from './logo.svg';
import './App.css';
// import RobloxPage from "components/RobloxPage";
// import Search from "src/components/Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form action="https://google.com/search" target="_blank" type="GET">
          <h1>Vovik Search</h1>
          <input type="search" name="q" />
          <input type="submit" value="Go" />
        </form>
        {/* <Search /> */}

        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
