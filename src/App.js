import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Cadastro from './Components/Pages/Cadastro';
import Consulta from './Components/Pages/Consulta';
import Editar from './Components/Pages/Editar';
import Visualizar from './Components/Pages/Visualizar';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Cadastro />} />
        <Route path="/consulta" element={<Consulta />} />
        <Route path="/visualizar/:id" element={<Visualizar />} />
        <Route path="/editar/:id" element={<Editar />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
