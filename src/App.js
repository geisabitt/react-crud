import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Cadastro from './Components/Pages/Cadastro';
import Consulta from './Components/Pages/Consulta';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Cadastro />} />
        <Route path="/consulta" element={<Consulta />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
