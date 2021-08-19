import React from "react";
import { SectionVer } from './Styles';

import profile from '../ico/profile.svg';

function VerDatos(props) {


    
  
    return (
      <>
        <SectionVer>
            <article>
                <section>New Correo</section>
                <div className="contenedor">
                    <img src={profile} alt="profile"></img>
                    <div>
                        <h2>Nombre: {props.datos.nombre}</h2>
                        <h2>Email: {props.datos.email}</h2>
                        <h2>Telefono: {props.datos.telefono}</h2>
                        
                    </div>
                </div>
                
                <p>{props.datos.mensaje}</p>

                <div className="raya"></div>
                
            </article>
        </SectionVer>
      </>
    );
  }
  
  export default VerDatos;
  