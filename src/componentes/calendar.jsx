import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import timeGridPlugin from "@fullcalendar/timegrid";
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from "react";
import {v4 as uuid} from "uuid";
import { Modal } from "bootstrap";
import 'react-time-picker/dist/TimePicker.css'

const Calendario =() =>{
    const [nombre, setNombre]=useState('')
    const [fecha, setFecha]=useState({
      dia:"",
      inicio:"",
      fin:'',
    });
    const [events, setEvents]=useState([]);        
   
    const handleSelect = (info) =>{        
        setFecha({
          dia: info.start.getDate()+'-'+(parseInt(info.start.getMonth())+1)+'-'+info.start.getFullYear(),
          inicio:info.start,
          fin:info.end
        });              
        const mymodal=new Modal(document.getElementById("mymodal"));
        mymodal.show();
    };
     const agregar =() =>{                          
             nombre ? (
              setEvents([...events,{
                start:fecha.inicio,
                end:fecha.fin,
                title:nombre,
                id:uuid(),
            },])             
             ):(
                alert('datos insuficientes')
             )
             document.getElementById("EventName").value=null;  
             setNombre('')
     }
     const showInfo= (info)=>{
      alert(info.event.title)      
     }
     
    return(       
      <div className="container-fluid bg-light position-relative h-auto p-3git bg-opacity-75" style={{fontSize:('1em'), marginTop:('100px'), width:('90%')}}>
         <FullCalendar          
          headerToolbar={{
            start: "today prev next",
            end: "dayGridMonth timeGridDay",
            center:"title"
          }}
          height='auto'
          selectable
          select={handleSelect}
          plugins={[ dayGridPlugin, interactionPlugin, timeGridPlugin,bootstrap5Plugin ]}
          themeSystem='bootstrap5'
          views={["dayGridMonth", "timeGridDay"]}
          initialView="timeGridDay"          
          events={events}            
          eventClick={showInfo}         
           /> 
        <div className="modal fade" id="mymodal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
             <div className="modal-header">
               <h1 className="modal-title fs-5" id="exampleModalLabel">Programar cita para: {fecha.dia}</h1>
               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
             </div>
             <div className="modal-body">
               <form >
                 <div className="input-group mb-3">
                   <span className="input-group-text" id="basic-addon1">Descripcion</span>
                   <input type="text" className="form-control" 
                   placeholder="escriba los detalles del evento" aria-label="Username" 
                   aria-describedby="basic-addon1" 
                   id="EventName"
                   onChange={(e)=>setNombre(e.currentTarget.value)}
                   />                   
                 </div>
                 <p className="text-secondary">De: {fecha.inicio.toLocaleString()} 
                  <br /> 
                  A: {fecha.fin.toLocaleString()}</p>
               </form> 
               <div className="modal-footer">
               <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
               <button type="button" className="btn btn-primary" onClick={agregar}>Aceptar</button>               
             </div> 
             </div>
             
           </div>
          </div>
        </div>
      </div>     
    );
};
export default Calendario