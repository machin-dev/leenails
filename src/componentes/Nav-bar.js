import React from "react";
import { Link } from "react-router-dom";
import { Telegram, Facebook, Instagram } from "react-bootstrap-icons";

export default function NavBar()
{
    return(
       <ul className="nav justify-content-center position-fixed top-0 w-100 shadow overflow-hidden bg-light bg-opacity-75" id='nav' style={{zIndex:('999')}}>          
        <li className="nav-link me-4 d-inline bg-dark " title='Pagina de Inicio'>               
              <Link to='/Home' className="text-white">LeeNails</Link>               
          </li>
           <li className="nav-item h-100" id='lin'>
               <Link className="nav-link text-primary " to="/Estilos" aria-current="page">Estilos</Link>
           </li>
           <li className="nav-item h-100" id='lin'>
             <Link className="nav-link text-primary " to="/Servicios" aria-current="page">Servicios</Link>
           </li>                     
           <li className="nav-item h-100" id='lin'>
             <Link className="nav-link text-primary " to="/Localizacion" aria-current="page">Localizacion</Link>
           </li> 
           <li className="nav-item h-100 ms-4 " >
             <Link className="nav-link text-dark " to="" aria-current="page"><Facebook /></Link>
           </li> 
           <li className="nav-item h-100 " >
             <Link className="nav-link text-dark " to="" aria-current="page"><Telegram /></Link>
           </li> 
           <li className="nav-item h-100 " >
             <Link className="nav-link text-dark " to="" aria-current="page"><Instagram /></Link>
           </li>        
       </ul>
    )
}
