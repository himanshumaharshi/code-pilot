import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';

function App() {
  return (
    <div className="theme sm:h-[100vh] pb-10">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
