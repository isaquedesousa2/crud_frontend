import './global.css'
import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import SearchImage from './pages/SearchImage';


function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route path="/entrar" element={<Login />} />
      <Route path="/cadastrar" element={<Register />} />
      <Route path="/dashboard/buscar" element={<SearchImage />} />
    </Routes>
   </BrowserRouter> 
  );
}

export default App;
