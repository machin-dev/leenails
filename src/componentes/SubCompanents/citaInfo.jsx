
import 'bootstrap/dist/css/bootstrap.css';

import { useEffect } from 'react';
import { ArrowRight, Trash, TrashFill } from 'react-bootstrap-icons';

const CitaInfo =({info})=>{
    const {event}=info; 
    
    const eliminar =()=>{
        alert("eliminado")
    }
    useEffect(()=>{
        console.log(info.view.type)
    },[])
    return(
        <div className='overflow-auto text-left w-100 border d-flex flex-column' >
            
        {event ? (
            info.view.type==="dayGridMonth" ?(
                <>
                   <div>
                    <label className='text-white text-center bg-primary w-100'>{event.title}</label>
                    <p className='text-wrap'>De: {event.start.toLocaleTimeString('en-US')}                    
                     A: {event.end.toLocaleTimeString('en-US')}</p>
                   </div>
                </>
            ):(
                <>
                <label className=' text-dark text-wrap'>
                {event.title} <ArrowRight /> De: {event.start.toLocaleTimeString('en-US')}
                <ArrowRight />
                 A: {event.end.toLocaleTimeString('en-US')}
                
            </label></>
            )
            
        ):(
        <></>
        )}
        
        </div>
    );
};
export default CitaInfo