import { ErrorMessage, Field } from 'formik';
import React from 'react'

const Input = (props) => {
    const {label, name, type, as, ...rest} = props;
  return (
    <div>
        <label htmlFor={name} className='form-control'>{label}</label>
        <Field as={as} id={name} type={type} name={name} {...rest} />
        <ErrorMessage name={name} component={'div'} className='error'/>
    </div>
  )
}

export default Input