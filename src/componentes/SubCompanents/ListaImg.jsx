import { useState } from "react";
import { ArrowLeftCircle, Back } from "react-bootstrap-icons";
import CardImage from "./CardImage";



export default function ListaImg(props){
   const {direccion}=props;   
   
    return(
        <div className="container-fluid d-flex flex-wrap align-items-center justify-content-center m-2 h-100 overflow-auto text-white" id='imagenes'>          
            { 
             direccion ? (
              <>  
              <CardImage d={direccion+'/0'}/>
             
              <CardImage d={direccion+'/1'}/>
             
              <CardImage d={direccion+'/2'}/>
              </>
            ):(
               <div className="card w-100  bg-transparent d-inline-flex m-4 shadow">
                <h1 className="w-100 text-center opacity-50"><ArrowLeftCircle />seleccione un estilo</h1>
                </div>             
            )}   
        </div>
    );
}