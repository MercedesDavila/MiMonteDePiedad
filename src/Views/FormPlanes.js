import React from 'react';
import { Formik, Form, useField } from 'formik';
import { Link } from "react-router-dom";
import * as Yup from 'yup';

import './FormPlanes.css'
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


const MySelect = ({ label, ...props }) => {

  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <errormessage>{meta.error}</errormessage>
      ) : null}
    </>
  );
};

// Formulario
const SignupForm = () => {
  return (
    <>
      <h1 className='title'>¿Cuáles son tus planes?</h1>
      <Formik
        initialValues={{
          planes: '',
          ctonecesitas:'',
          plazo:'', // añade un select select
          percdtc: '', // añade un select select
         
          
        }}
        validationSchema={Yup.object({
          planes: Yup.string()
            .max(200, 'Debe tener 15 caracteres o menos')
            .required('Obligatorio'),
          ctonecesitas: Yup.string()
            .max(10, 'Debe tener 10 caracteres o menos')
            .required('Obligatorio'),
          plazo: Yup.string()
          .oneOf(
            ["op1", "op2", "op3", "op4"],
            "Selecciona una opción")
          .required("Obligatorio"),
       
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="formPlanes">
          <MyTextInput className="input-date"
            name="planes"
            type="textarea"
            placeholder="Describe tus planes"
          />
           <MyTextInput className="number-imput"
            label="¿Cuánto necesitas?"
            name="ctonecesitas"
            type="number"
            placeholder="Ingresa la Cantidad Deseada"
          />
          <MySelect label="¿Enque tiempo puedes cubrirlo?" name="plazo">
            <option value="">Selecciona una opción</option>
            <option value="op1">3 meses</option>
            <option value="op2">6 meses</option>
            <option value="op3">18 meses</option>
            <option value="op4">24 meses</option>
          </MySelect>
         
          <Link to="/detalles">
          <button type="submit" className="siguiente-btn">Calcular</button></Link>
        </Form>
      </Formik>
    </>
  );
};
// function App() {
//     return <SignupForm />;
//   }

export default SignupForm;