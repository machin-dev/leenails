 export default function Fondo(){
    return(
        <div className="container-fluid position-absolute vh-100 bg-dark p-0 position-fixed">
            <img className="" src={require('../../img/bg.jpg')} style={{width:('100%'), height:('100%'), objectFit:('cover')}} alt="" /> 
        </div>
    );

 }