import './App.css';
import Home from './pages/Home';
import Properties from './pages/Properties';
import Search from './pages/Search';
import {
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mx-auto">
        <Routes>
          <Route path = '/' element = {<Home />} />
          <Route path = '/properties' element = {<Properties />} />
          <Route path = '/search' element = {<Search />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
