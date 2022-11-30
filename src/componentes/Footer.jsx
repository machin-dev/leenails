import React from "react";
import { Telegram, Facebook } from "react-bootstrap-icons";


const Footer = () =>{
    return(
        <div className="container-fluid bg-transparent position-fixed bottom-0 ">
            <p className="text-center text-secondary">
                 Designed by: Michel Machin-- 
                  <Telegram />--
                  <Facebook />
            </p>
        </div>
    );
}
export default Footer