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
import CitaInfo from "./SubCompanents/citaInfo";
import { Modal } from "bootstrap";
import TimePicker from "react-time-picker";
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
        console.log(info)
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
     
    return(       
      <div className="container-fluid bg-light position-relative h-auto p-4 " style={{fontSize:('1em'), marginTop:('100px'), width:('90%')}}>
         <FullCalendar          
          headerToolbar={{
            start: "today prev next",
            end: "dayGridMonth dayGridWeek timeGridDay",
            center:"title"
          }}
          height='auto'
          selectable
          select={handleSelect}
          plugins={[ dayGridPlugin, interactionPlugin, timeGridPlugin,bootstrap5Plugin ]}
          themeSystem='bootstrap5'
          views={["dayGridMonth", "dayGridWeek", "timeGridDay"]}
          initialView="timeGridDay"          
          events={events}  
          eventContent={(info)=><CitaInfo info={info}/>}             
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
                   <span className="input-group-text" id="basic-addon1">Nombre</span>
                   <input type="text" className="form-control" 
                   placeholder="Nombre" aria-label="Username" 
                   aria-describedby="basic-addon1" 
                   id="EventName"
                   onChange={(e)=>setNombre(e.currentTarget.value)}
                   />
                 </div>
                 <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">De:</span>
                    <TimePicker value={fecha.inicio} className="form-control"/>
                 </div>
                 <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">A:</span>
                  <TimePicker value={fecha.fin} className="form-control"/>
                  
                 </div>                 
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