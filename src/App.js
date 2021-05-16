import './App.css';
import NavBar from './NavBar'
import Home from './Home' 
function App() {
  return (
    <div className="App">
      {/* div injected in html file  */}

      <NavBar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
