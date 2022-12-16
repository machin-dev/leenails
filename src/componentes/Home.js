import React from "react";
import '../estilo/estilo.css';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Calendar } from "react-bootstrap-icons";


export default function Home()
{    
    return (       
        <div className='container-fluid text-center d-flex flex-column justify-content-center  position-relative align-items-center h-100  overflow-auto'>                                
           <div className="rounded shadow bg-light bg-opacity-50">            
            <p className="text-center text-light bg-secondary">SERVICIO DE MANICURE</p>
            <h1 className=" text-center gradient_text fw-bold border-bottom"  style={{fontSize:('9vw')}}>LeeNAILS</h1>                       
            <div className="bg-light p-4">
                <p className="text-secondary bg-light">Tu cuerpo es tu templo y tu lugar de vida, cuídalo, mímalo y hazle uñas perfectas.  </p>
                <Link to='/Cita'> <button className="btn btn-primary " id="solid" ><Calendar  className="me-2"/>Programar Cita</button></Link>                      
                </div>
           </div>
           
           <div className="shadow m-4  bg-primary rounded " >            
            
           </div> 
          
        </div>                     
    );
}