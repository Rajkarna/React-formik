import React from 'react'
import { Field, ErrorMessage } from 'formik'

function Radio(props) {
    const { label, name, options, ...rest } = props
    return (
        <div className='form-control'>
            <label>{label}</label>
            <Field name={name} >
                {({ field,meta }) => {
                    console.log(field)
                    return options.map(option => {
                        return (
                            <React.Fragment key={option.key}>
                                <input
                                    type='radio'
                                    id={option.value}
                                    {...field}
                                    {...rest}
                                    value={option.value}
                                />
                                <label htmlFor={option.value}>{option.key}</label>
                            </React.Fragment>
                        )
                    })
                }}
            </Field>
            <ErrorMessage name={name} component='div' className='error'  />
        </div>
    )
}

export default Radio