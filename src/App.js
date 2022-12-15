import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import './App.css';
import HeroSection from './components/HeroSection/HeroSection';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/'/>
        </Routes>
        <HeroSection/>
      </div>
    </Router>
  );
}

export default App;
