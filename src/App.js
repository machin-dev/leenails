import './App.css';
import NavBar from './componentes/Nav-bar';
import Localizacion from './componentes/Localizacion';
import Servicios from './componentes/Servicios';
import Estilos from './componentes/Estilos';
import Home from './componentes/Home';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Footer from './componentes/Footer';
import Fondo from './componentes/SubCompanents/fondo';
import Catalogo from './componentes/SubCompanents/catalago';



function App() {
  return (
    <div className=' overflow-auto bg-dark vh-100'>
      <Router>
      <Fondo />
      <NavBar />
      <Routes>       
        <Route path="/" element={< Home />} />
        <Route path="/Localizacion" element={<Localizacion />} />
        <Route path="/Estilos" element={<Estilos />} />     
        <Route path="/Catalogo" element={<Catalogo />} />    
        <Route path="/Servicios" element={<Servicios />} />
        <Route path="/Home" element={< Home />} />        
      </Routes>     
      </Router>
      <Footer />
    </div>
  );
}

export default App;
