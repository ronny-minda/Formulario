import React, {Fragment, useState} from "react";
import Ver from './Componentes/VerDatos';

import { Form, 
        Label, 
        Span, 
        Input, 
        Button, 
        H1, 
        Textarea, 
        Section, 
        InputButton } from './Componentes/Styles'; 



function App() {

  const [datos, setDatos] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: ""
  })
  
  const handleInputChange = (e) => {
      console.log(e.target.value)
      setDatos({
        ...datos,
        [e.target.name] : e.target.value
      })
  }
  
  const enviarDatos = (e) => {
      e.preventDefault();
      
  }
  

  return (
    <>
    <Form action="" onSubmit={enviarDatos}>
      <Label>
        <Span>Nombre</Span>
        <Input type="text" name="nombre" id="nombre" placeholder="nombre" autocomplete="name" required="" onChange={handleInputChange}></Input>
      </Label>

      <Label>
        <Span>Email</Span>
        <Input type="email" name="email" id="email" placeholder="email" autocomplete="email" required="" onChange={handleInputChange}></Input>
      </Label>
      <Label>
        <Span>Telefono</Span>
        <Input type="number" name="telefono" id="telefono" placeholder="telefono" autocomplete="tel" required="" onChange={handleInputChange}></Input>
      </Label>
      <Label>
        <Span>Mensaje</Span>
        <Textarea id="mensaje" name="mensaje" placeholder="Escribe tu mensaje aquí..." onChange={handleInputChange}></Textarea>
      </Label>
      <InputButton type="submit"></InputButton>
    </Form>

    <Ver datos={datos}></Ver>
    </>
  );
}

export default App;
