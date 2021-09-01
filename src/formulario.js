import React, {useState} from 'react';
import { Formik } from 'formik';
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

const Formulario = () => {

  const [ formulario, setFormulario ] = useState({
    valor: false,
    ver: {nombre: '',
    email: '',
    telefono: '',
    mensaje: ''}
  });

  return (
    <>
      <Formik
        initialValues={{
          nombre: '',
          email: '',
          telefono: '',
          mensaje: ''
        }}
        validate={(valores) => {
          let errores = {};
          setFormulario({
            valor: formulario.valor,
            ver: {...valores}
          })
          if(!valores.nombre) {
            errores.nombre = 'Por fovor ingresa un nombre'
          } else if( !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre) ) {
            errores.nombre = 'El nombre solo puede contener letras y espacios'
          }

          if(!valores.email) {
            errores.email = 'Por fovor ingresa un correo'
          } else if( !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email) ) {
            errores.email = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
          }


          if(!valores.telefono) {
            errores.telefono = 'Por favor ingresa un numero de telefono'
          } else if( !/\d*[0-9]/.test(valores.telefono) ) {
            errores.telefono = 'El numero solo puede contener numeros sin espacios.'
          }

          return errores
        }}
        onSubmit={(valores, { resetForm }) =>{
          resetForm();
          console.log('Formulario enviado');
          setFormulario({
            valor: true,
            ver: {}
          })
          setTimeout(() => setFormulario({
            valor: false,
            ver: {}
          }), 500);
        }}
      >
        
        {( {values, errors, touched, handleSubmit, handleChange, handleBlur} ) => (
          <Form onSubmit={ handleSubmit }>

          <Label>
            <Span>Nombre</Span>
            <Input 
              type="text" 
              name="nombre" 
              id="nombre" 
              placeholder="nombre" 
              autocomplete="name" 
              required="" 
              value={ values.nombre } 
              onChange={ handleChange }
              onBlur={ handleBlur }
              
              ></Input>
              { touched.nombre && errors.nombre && <div>{ errors.nombre }</div> }
          </Label>

          <Label>
            <Span>Email</Span>
            <Input 
              type="email" 
              name="email" 
              id="email" 
              placeholder="email" 
              autocomplete="email" 
              required="" 
              value={ values.email } 
              onChange={ handleChange }
              onBlur={ handleBlur }
              
              ></Input>
              { touched.email && errors.email && <div>{ errors.email }</div> }
          </Label>
          <Label>
            <Span>Telefono</Span>
            <Input 
              type="number" 
              name="telefono" 
              id="telefono" 
              placeholder="telefono" 
              autocomplete="tel" 
              required="" 
              value={ values.telefono } 
              onChange={ handleChange }
              onBlur={ handleBlur }
              
              ></Input>
              { touched.telefono && errors.telefono && <div>{ errors.telefono }</div> }
          </Label>

          <Label>
            <Span>Mensaje</Span>
            <Textarea 
              id="mensaje" 
              name="mensaje" 
              placeholder="Escribe tu mensaje aquí..." 
              value={ values.mensaje } 
              onChange={ handleChange }
              onBlur={ handleBlur }
              
              ></Textarea>
              { touched.email && errors.email && <div>{ errors.email }</div> }
          </Label>
          
          <InputButton type="submit"></InputButton>
          { formulario.valor && <div>ENVIADO!</div> }
          </Form> 
        )}
        
        

      </Formik>
      <Ver datos={formulario.ver}>hola</Ver>
    </>
  );
}



export default Formulario;











// import React, {Fragment, useState} from "react";
// import Ver from './Componentes/VerDatos';

// import { Form, 
//         Label, 
//         Span, 
//         Input, 
//         Button, 
//         H1, 
//         Textarea, 
//         Section, 
//         InputButton } from './Componentes/Styles'; 



// function App() {

//   const [datos, setDatos] = useState({
//     nombre: "",
//     email: "",
//     telefono: "",
//     mensaje: ""
//   })
  
//   const handleInputChange = (e) => {
//       console.log(e.target.value)
//       setDatos({
//         ...datos,
//         [e.target.name] : e.target.value
//       })
//   }
  
//   const enviarDatos = (e) => {
//       e.preventDefault();
      
//   }
  

//   return (
//     <>
//     <Form action="" onSubmit={enviarDatos}>
//       <Label>
//         <Span>Nombre</Span>
//         <Input type="text" name="nombre" id="nombre" placeholder="nombre" autocomplete="name" required="" onChange={handleInputChange}></Input>
//       </Label>

//       <Label>
//         <Span>Email</Span>
//         <Input type="email" name="email" id="email" placeholder="email" autocomplete="email" required="" onChange={handleInputChange}></Input>
//       </Label>
//       <Label>
//         <Span>Telefono</Span>
//         <Input type="number" name="telefono" id="telefono" placeholder="telefono" autocomplete="tel" required="" onChange={handleInputChange}></Input>
//       </Label>
//       <Label>
//         <Span>Mensaje</Span>
//         <Textarea id="mensaje" name="mensaje" placeholder="Escribe tu mensaje aquí..." onChange={handleInputChange}></Textarea>
//       </Label>
//       <InputButton type="submit"></InputButton>
//     </Form>

//     <Ver datos={datos}></Ver>
//     </>
//   );
// }

// export default App;
