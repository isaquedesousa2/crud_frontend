import Login from './pages/Login';
import { Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import SearchImage from './pages/SearchImage';
import Dashboard from './pages/Dashboard';
import MyImagens from './pages/MyImages';
import UploadImage from './pages/UploadImage';
import MyImageFull from './pages/MyImageFull';

function Routers() {

    return (
      <Routes>
        <Route path="/entrar" element={<Login />} />
        <Route path="/cadastrar" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/buscar" element={<SearchImage />} />
        <Route path="/dashboard/minhas-imagens" element={<MyImagens />} />
        <Route path="/dashboard/minhas-imagens/:name" element={<MyImageFull />} />
        <Route path="/dashboard/salvar-imagens" element={<UploadImage />} />
      </Routes>
    );
  }
  
  export default Routers;