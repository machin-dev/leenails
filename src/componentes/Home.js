import React from "react";
import '../estilo/estilo.css';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Book } from "react-bootstrap-icons";


export default function Home()
{    
    return (       
        <div className='container-fluid d-flex flex-column justify-content-center  position-relative align-items-center h-100 overflow-auto'>                                
           <div className=" d-flex m-4 mt-1 w-50 justify-content-center p-4 bg-light shadow bg-opacity-50 ">
            <h1 className=" text-center display-1 gradient_text fw-bold border-bottom " style={{fontSize:('6vw')}}>Lee</h1>
            <h1 className=" text-center display-1 text-dark border-top" style={{fontSize:('6vw')}}>NAILS</h1> 
           </div>
           <div className="shadow m-4  bg-primary rounded " > 
           
            <Link to='/Catalogo'> <button className="btn btn-primary w-100" id="solid" ><Book  className="me-2"/>Ver Catalogo</button></Link>
           
           </div> 
        </div>  
                   
    );
}