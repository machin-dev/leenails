import LeerArchivos from "../funciones/readfiles";
import CardImage from "./SubCompanents/CardImage";
import ListStyles from "./SubCompanents/listStyles";
import { React, useEffect, useState } from "react";
import ListaImg from "./SubCompanents/ListaImg";


const Estilos =()=>{   
    const [dir, setDir]=useState(null); 
    const actualizar =()=>{
        console.log('esta es la direccion de la carpeta:'+dir);
    }
    useEffect((actualizar));
    return(
        <div className="container-fluid vh-100">
            <div className="row h-100 ">
            <div className="col col-lg-3 p-0"  >        
                <ListStyles folder={dir} setFolder={setDir} /> 
            </div>
            <div className="col ">
                 <ListaImg direccion={dir} />
            </div>
        </div>
        </div>
    );
}

export default Estilos