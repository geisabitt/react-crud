import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Consulta from "./Components/Pages/Consulta";
import Form from "./Components/Pages/Form";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/consulta" element={<Consulta />} />
        <Route path="/form/:id" element={<Form />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
