
import CardImage from "./CardImage";



export default function ListaImg(props){
   const direccion=['solid','2colores','relieve','creativo'];   
   
    return(
        <div className="container-fluid d-flex flex-wrap align-items-center justify-content-center m-2 h-100 overflow-auto text-white" id='imagenes'>          
            {           
             direccion.map((dir,index)=>(
                <>
              <CardImage d={dir+'/0'} />
             
              <CardImage d={dir+'/1'} key={index}/>
             
              <CardImage d={dir+'/2'} key={index}/>
              </>
             ))
            }
        </div>
    );
}