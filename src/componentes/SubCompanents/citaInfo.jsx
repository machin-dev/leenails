
import 'bootstrap/dist/css/bootstrap.css';
import { ArrowRight, TrashFill } from 'react-bootstrap-icons';

const CitaInfo =({info})=>{
    const {event}=info; 
    
    return(
        <div className='overflow-auto text-left w-100  d-flex flex-column rounded-3 border' >
            
        {event ? (
            info.view.type!=="timeGridDay" ?(
                <>
                   <div>
                    <label className='text-white text-center bg-primary w-100 '>
                         {event.title}
                        <TrashFill className='text-white ms-4 w-25'
                            title="Eliminar evento"
                            onClick={()=>event.remove()} />
                    </label>
                    <p className='text-wrap'>De: {event.start.toLocaleTimeString('en-US')}                    
                     A: {event.end.toLocaleTimeString('en-US')}</p>
                   </div>
                </>
            ):(
                <>
                <label className='text-white text-wrap'>
                {event.title} <ArrowRight /> De: {event.start.toLocaleTimeString('en-US')}
                <ArrowRight />
                 A: {event.end.toLocaleTimeString('en-US')}
                 <TrashFill className='text-danger ms-4'title="Eliminar evento"
                  onClick={()=>{event.remove()}}/>
            </label></>
            )
            
        ):(
        <></>
        )}
        
        </div>
    );
};
export default CitaInfo