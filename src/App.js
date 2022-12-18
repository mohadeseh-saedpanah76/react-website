import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products'
import Services from './pages/Services/Services'
import SignUp from './pages/SignUp/SignUp'

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/sign-up' element={<SignUp/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
