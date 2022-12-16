import React from "react";
import { Link } from "react-router-dom";
import { Telegram, Facebook, Instagram } from "react-bootstrap-icons";
import '../estilo/estilo.css';

export default function NavBar()
{
    return(
      <nav className="bg-opacity-75 navbar navbar-expand-sm justify-content-center position-fixed top-0 w-100 shadow overflow-hidden bg-transparent " id='nav' style={{zIndex:('999')}}>
        <div className="nav">
          <Link to='/Home' className="navbar-brand text-white bg-primary rounded-pill p-3">LeeNails</Link>
          <button className="navbar-toggler d-lg-none border-2" type="button" data-bs-toggle="collapse"
           data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
           aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="collapsibleNavId" >
            <ul className="nav navbar"> 
              <li className="nav-item h-100 rounded-pill" id='lin'>
                <Link className="nav-link text-primary " to="/Estilos" aria-current="page">Estilos</Link>
              </li>
              <li className="nav-item h-100 rounded-pill" id='lin'>
                <Link className="nav-link text-primary " to="/Servicios" aria-current="page">Servicios</Link>
              </li>                     
              <li className="nav-item h-100 rounded-pill" id='lin'>
                <Link className="nav-link text-primary " to="/Localizacion" aria-current="page">Localizacion</Link>
              </li> 
              <li className="nav-item h-100 ms-4 rounded-pill" >
                <a className="nav-link text-dark "
                 href="https://www.facebook.com/leeann.mazonromero" 
                 title="Ver perfil de LeeAnn"
                 aria-current="page"><Facebook /></a>
              </li> 
              <li className="nav-item h-100 " >
                <Link className="nav-link text-dark " to="" aria-current="page"><Telegram /></Link>
              </li> 
              <li className="nav-item h-100 " >
                <Link className="nav-link text-dark " to="" aria-current="page"><Instagram /></Link>
              </li>        
            </ul> 
          </div>
         </div>      
      </nav>
       
    )
}
