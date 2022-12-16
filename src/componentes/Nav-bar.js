import React from "react";
import { Link } from "react-router-dom";
import { Telegram, Facebook, Instagram } from "react-bootstrap-icons";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../estilo/estilo.css';

export default function NavBar()
{
    return(
      <nav className="navbar navbar-expand-sm justify-content-center fixed-top  overflow-hidden bg-light" id='nav' style={{zIndex:('999')}}>
        <div className="nav">
          <Link to='/Home' className="navbar-brand text-white bg-primary rounded-pill p-3">LeeNails</Link>
          <button class="btn border d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#menu" aria-controls="menu">
           <span className="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-start" tabindex="-1" id="menu" aria-labelledby="menuLabel">
           <div class="offcanvas-header">
             <h5 class="offcanvas-title" id="menuLabel">Menu</h5>
             <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
           </div>
           <div class="offcanvas-body">            
            <ul className="navbar-nav nav me-auto mt-2 mb-lg-0">
              <li className="nav-item rounded-pill" id='lin' data-bs-dismiss="offcanvas">
                <Link className="nav-link  text-primary " to="/Estilos" aria-current="page">Galeria</Link>
              </li>
              <li className="nav-item rounded-pill" id='lin' data-bs-dismiss="offcanvas">
                <Link className="nav-link text-primary text-muted " to="/Servicios" aria-current="page">Servicios</Link>
              </li>                     
              <li className="nav-item rounded-pill" id='lin' data-bs-dismiss="offcanvas">
                <Link className="nav-link text-primary text-muted" to="/Localizacion" aria-current="page">Localizacion</Link>
              </li> 
              <li className="nav-item rounded-pill" id='lin' data-bs-dismiss="offcanvas">
                <Link className="nav-link  text-primary " to="/Cita" aria-current="page">Cita</Link>
              </li>
              <li className="nav-item h-100 ms-1 rounded-pill" data-bs-dismiss="offcanvas">
                <a className="nav-link text-dark "
                 href="https://www.facebook.com/leeann.mazonromero" 
                 title="Ver perfil de LeeAnn"
                 aria-current="page"><Facebook /></a>
              </li> 
              <li className="nav-item h-100 " data-bs-dismiss="offcanvas">
                <Link className="nav-link text-dark " to="" aria-current="page"><Telegram /></Link>
              </li> 
              <li className="nav-item h-100 " data-bs-dismiss="offcanvas">
                <Link className="nav-link text-dark " to="" aria-current="page"><Instagram /></Link>
              </li>        
            </ul> 
            </div>
          </div>
         </div>      
      </nav>
       
    )
}
