import React, { useRef, useState } from "react";
import { Brush, CardImage } from "react-bootstrap-icons";



export default function ListStyles(props){   
  const {folder, setFolder}=props;  
  const loadDir=(e)=>{    
     setFolder(e.currentTarget.id); 
     document.location='#imagenes';          
  }  
    return(   
      
      <div className='container-fluid d-flex  position-relative justify-content-center vh-100 bg-dark p-0 bg-opacity-75'>           
         <div className="side-navbar d-flex align-items-center justify-content-center flex-wrap flex-column w-100">
             <ul className="nav flex-column text-white ">
              <li className="text-white m-4" >                               
                <h4 className="text-white fw-bold border-bottom"><Brush className="me-2"/>ESTILOS</h4>
              </li>
              <li className="nav-link"   >
                <button className="btn btn-primary w-100" id="solid" onClick={loadDir}> Color solido</button>
              </li>
              <li className="nav-link" >
              <button className="btn btn-primary w-100"  id="2colores" onClick={loadDir}> Dos colores</button>
              </li>
              <li className="nav-link" >
              <button className="btn btn-primary w-100" id="creativo" onClick={loadDir}> Creativos</button>
              </li>
              <li className="nav-link" >
              <button className="btn btn-primary w-100" id="relieve" onClick={loadDir}> Relieve</button>
              </li>
             </ul>
         </div>                 
     </div>            
    );
};