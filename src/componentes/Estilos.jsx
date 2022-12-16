import LeerArchivos from "../funciones/readfiles";
import CardImage from "./SubCompanents/CardImage";
import ListStyles from "./SubCompanents/listStyles";
import { React, useEffect, useState } from "react";
import ListaImg from "./SubCompanents/ListaImg";


const Estilos =()=>{   
    
  
    return(
        <div className="container-fluid vh-100" style={{marginTop:('100px')}}>
              <ListaImg />
         </div>
    );
}

export default Estilos