import './App.css';
import About from './pages/About';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="w-screen h-screen bg-slate-600 text-white flex justify-center items-center flex-col">
      <h1 className="text-5xl font-bold">Hello</h1>
      <p className="text-3xl font-semibold">Start Building</p>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
