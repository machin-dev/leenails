import { Cash, CurrencyDollar, Save } from "react-bootstrap-icons";

const CardImage=(dir)=>{
    const {d}=dir;
    return(
        <>        
            { d ? (
                <div className="card w-25 bg-dark d-inline-flex m-4 bg-opacity-75 text-center "  style={{width:('450px'), height:('550px'), minWidth:('350px')}}>
                    <img src={require('../../img/'+d+'.jpg')} className="card-img-top border border-5" alt="" style={{width:('100%'), height:('75%'), objectFit:('cover')}} />
                    <div className="card-body">                
                     <p className="card-text"><Cash className="fs-2"/> Precio: 
                     <span className="bg-light text-dark rounded-pill p-2">$$$</span></p>
                    </div>
                    <div className="card-footer">
                     <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>           
            ):(
            <></>
            )}
        </>
    );
}
export default CardImage