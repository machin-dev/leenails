import React from "react";
import '../estilo/estilo.css';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Book, Calendar } from "react-bootstrap-icons";


export default function Home()
{    
    return (       
        <div className='container-fluid d-flex flex-column justify-content-center  position-relative align-items-center h-100 overflow-auto'>                                
           <div className=" d-flex m-4  justify-content-center p-5 bg-light rounded shadow bg-opacity-50 ">
            <h1 className=" text-center gradient_text fw-bold border-bottom"  style={{fontSize:('9vw')}}>Lee</h1>
            <h1 className=" text-center text-dark border-top"  style={{fontSize:('9vw')}}>NAILS</h1> 
           </div>
           <div className="shadow m-4  bg-primary rounded " >            
            <Link to='/Cita'> <button className="btn btn-primary w-100" id="solid" ><Calendar  className="me-2"/>Cita</button></Link>           
           </div> 
        </div>                     
    );
}