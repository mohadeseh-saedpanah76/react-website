import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/'/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
