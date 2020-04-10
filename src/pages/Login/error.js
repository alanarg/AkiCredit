import React from "react"
import './css.css';

const Error = ({ touched, message, err})=>{
    if(err===false){
        return  <div className="form-message-invalid">Inválido</div>;
    }
    if(!touched){
        return <div className="form-message-invalid">&nbsp;</div>;
    }
    if(message){
        return <div className="form-message-invalid">{message}</div>;
        
    }
    
   
    return <div className="form-message-valid">Ok!</div>;
};

export default Error;