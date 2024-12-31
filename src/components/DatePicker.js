import { Field, ErrorMessage } from 'formik';
import React from 'react'
import DateView from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePicker = (props) => {
    const {label, name, ...rest} = props;

  return (
    <div>
        <label htmlFor={name}>{label}</label>
        <Field name={name}>
            {
                ({form, field}) => {
                    const {setFieldValue} = form;
                    const {value} = field

                    return (
                        <DateView id={name} {...field} {...rest} selected={value} onChange={val => setFieldValue(name, val)}  />
                    )
                }
            }
        </Field>
        <ErrorMessage name={name} component='div' className='error' />
    </div>
  )
}

export default DatePicker