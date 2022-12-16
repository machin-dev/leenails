import '../../estilo/estilo.css';

const CardImage=(dir)=>{
    const {d}=dir;
    return(
      
        <div className="card w-25  d-inline-flex m-2   text-center "  
                id="gallery"
                style={{width:('450px'), height:('550px'), minWidth:('350px')}}>       
            { d ? (
                   <img src={require('../../img/'+d+'.jpg')} className="card-img-top" alt="galeria"  style={{width:('100%'), height:('100%'), objectFit:('cover')}} />                    
                       
            ):(
                  <> No Imge found</>
            )}
       </div>  
    );
}
export default CardImage