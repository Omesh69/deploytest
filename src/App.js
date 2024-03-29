import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './componnet/Home';
import Dashboard from './componnet/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
