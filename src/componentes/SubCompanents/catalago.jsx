import React from "react";
import { Book } from "react-bootstrap-icons";
import CardImage from "./CardImage";

export default function  Catalogo(){
    return(
        <div className="container-fluid  h-100 ">
            <div className="row h-100 ">
                <div className="col col-lg-3 p-0"  >  
                    <div className='container-fluid d-flex position-relative justify-content-center vh-100 bg-dark p-0 bg-opacity-75'>           
                     <div className="side-navbar d-flex align-items-center justify-content-center flex-wrap flex-column" style={{width:('15em')}}>
                        <h4 className="text-white fw-bold border-bottom"><Book className="me-2"/>CATALOGO</h4>
                     </div>   
                   </div>
                </div>
                <div className="col ">
                    
                </div>
            </div>         
        </div>    
    );
}
