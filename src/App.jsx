import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/css/Global.css';
import './assets/css/Navbar.css';
import './assets/css/ListaEstudiantes.css';
import './assets/css/Registro.css';

import ListaEstudiantes from "./components/ListaEstudiantes";
import RegistroEstudiante from "./components/RegistroEstudiante";
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ListaEstudiantes />} />
        <Route path="/estudiantes" element={<ListaEstudiantes />} />
        <Route path="/estudiantes/registro" element={<RegistroEstudiante />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;