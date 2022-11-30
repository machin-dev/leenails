const CardImage=(dir)=>{
    const {d}=dir;
    return(
        <>        
            { d ? (
                <div className="card w-25 bg-dark d-inline-flex m-4 bg-opacity-75 "  style={{width:('450px'), height:('550px'), minWidth:('250px')}}>
                    <img src={require('../../img/'+d+'.jpg')} className="card-img-top border border-5" alt="" style={{width:('100%'), height:('100%'), objectFit:('cover')}} />
                    <div className="card-body">                
                    <p className="card-text">Precio:$$$</p>
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