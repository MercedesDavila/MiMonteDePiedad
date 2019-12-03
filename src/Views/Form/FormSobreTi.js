import React from 'react';
import { Formik, Form, useField } from 'formik';
import { Link } from "react-router-dom";
import * as Yup from 'yup';

import './FormSobreTi.css'
//import {Logo} from "./monte_logo.png";

const MyTextInput = ({ label, ...props }) => {
  
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};


// Formulario
const SignupForm = () => {
  return (
    <>
      {/* <div className="sobreti-box">
           <img src={Logo} className="sobreti-logo" alt="logo" />
       </div> */}
      <h1>Sobre tí</h1>
      <Formik
        initialValues={{
          fechnacimiento: '',
          nonmp: '',
          ine: '',
          ocupacion:'',
          cuentanos:'',
        }}
        validationSchema={Yup.object({
          fechnacimiento: Yup.string()
            .max(8, 'Debe seleccionar una fecha')
            .required('Obligatorio'),
          nonmp: Yup.string()
            .max(6, 'Debes de ingresar tu numero de Cliente Monte de Piedad')
            .required('Obligatorio'),
          ine: Yup.string()
          .max(15, 'Debe tener 13 o 12 caracteres')
            .required('Obligatorio'),
          ocupacion: Yup.string()
          .max(30, 'Debe tener 30 caracteres')
            .required('Obligatorio'),
          cuentanos: Yup.string()
          .max(200, 'Debe tener 200 caracteres')
          .required('Obligatorio'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="formulario">
          <MyTextInput
            label="Fecha de Nacimiento"
            name="fechnacimiento"
            type="date"
            placeholder="aaaa/mm/dd"
          />
          <MyTextInput
            label="No.NMP"
            name="nonmp"
            type="number"
            placeholder="(Opcional)"
          />
          <MyTextInput
            label="INE"
            name="ine"
            type="text"
            placeholder="Ejem.<<0747116375842"
          />
           <MyTextInput
            label="Ocupación"
            name="ocupacion"
            type="text"
            size="15" 
            maxlength="30" 
            placeholder="A que te dedicas"
          />
          <MyTextInput className="descripcion"
            label="Cuentanos sobre tu Negocio / Ocupación" 
            name="cuentanos"
            type="textarea"
            size="15" 
            maxlength="200" 
            placeholder="Compartenos tu opinion"
          />
          <Link to="/tusplanes">
          <button type="submit">Siguiente</button></Link>
        </Form>
      </Formik>
    </>
  );
};
// function App() {
//     return <SignupForm />;
//   }

export default SignupForm;