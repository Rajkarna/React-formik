import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup';

const initialValues = {
    name: '',
    email: '',
    channel: '',
    comments: '',
    address: '',
    social: {
        facebook: '',
        twitter: ''
    },
    phoneno: ['', ''],
    phNumbers: ['']
}
const savedValues = {
    name: 'raj',
    email: 'raj@gmail.com',
    channel: 'RAWAR',
    comments: 'Hello good morning',
    address: 'Dharmavaram',
    social: {
        facebook: '',
        twitter: ''
    },
    phoneno: ['', ''],
    phNumbers: ['']
}

const onSubmit = (values, onSubmitProps) => {
    console.log("submitted", values);
    console.log("onSubmitProps", onSubmitProps);
    onSubmitProps.setSubmitting(false)
    onSubmitProps.resetForm()
}

// const validate = values => {
//     let errors = {};

//     if (!values.name) {
//         errors.name = "required"
//     }
//     if (!values.email) {
//         errors.email = "required"
//     }
//     if (!values.channel) {
//         errors.channel = "required"
//     }

//     return errors
// }

const validationSchema = Yup.object({
    name: Yup.string().required('Required!'),
    email: Yup.string().required('Required!'),
    channel: Yup.string().required('Required!'),
})

const YoutubeForm = () => {
const [formValues, setFormValues] = useState(null)
    return (
        <Formik
            initialValues={ formValues || initialValues }
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            enableReinitialize
            validateOnMount
        >
            {
                (fprops) => {
                    console.log('fprops', fprops)
                    return (
                        <Form>
                            <div className='form-control'>
                                <label htmlFor="name">Name:</label>
                                <Field type="text" name="name" id="name" placeholder="Enter name" /><br />
                            </div>
                            <ErrorMessage name='name' component={'div'} className='error' />
                            <div className='form-control'>

                                <label htmlFor="email">Email:</label>
                                <Field type="email" name="email" id="email" /><br />
                            </div>
                            <ErrorMessage name='email' component={'div'} className='error' />
                            <div className='form-control'>

                                <label htmlFor="channel">YouTube Channel:</label>
                                <Field type="text" name="channel" id="channel" /><br />
                            </div>
                            <ErrorMessage name='channel' component={'div'} className='error' />
                            <div className='form-control'>

                                <label htmlFor="comments">comments</label>
                                <Field as="textarea" type="text" name="comments" id="comments" /><br />
                            </div>
                            <ErrorMessage name='comments' />
                            <div className='form-control'>

                                <label htmlFor="address">Address</label>
                                <Field name='address' >
                                    {
                                        (props) => {
                                            const { field, meta } = props
                                            return (<div>

                                                <input type='text' placeholder='enter address' {...field} />
                                                {meta.touched && meta.error ? <div className='errors'>{meta.error}</div> : null}
                                            </div>)
                                        }
                                    }
                                </Field><br />
                            </div>
                            <div className='form-control'>
                                <label htmlFor='facebook'>facebook</label>
                                <Field id='facebook' type='text' name='social.facebook' />
                            </div>
                            <div className='form-control'>
                                <label htmlFor='twitter'>twitter</label>
                                <Field id='twitter' type='text' name='social.twitter' />
                            </div>
                            <div className='form-control'>
                                <label htmlFor='phoneno1'>phoneno1</label>
                                <Field id='phoneno1' type='text' name='phoneno[0]' />
                            </div>
                            <div className='form-control'>
                                <label htmlFor='phoneno2'>phoneno2</label>
                                <Field id='phoneno2' type='text' name='phoneno[1]' />
                            </div>
                            <div className='form-control'>
                                <label>List of phone numbers</label>
                                <FieldArray name='phNumbers'>
                                    {fieldArrayProps => {
                                        const { push, remove, form } = fieldArrayProps
                                        const { values } = form
                                        const { phNumbers } = values
                                        // console.log('fieldArrayProps', fieldArrayProps)
                                        //   console.log('Form errors', form.errors)
                                        return (
                                            <div>
                                                {phNumbers.map((phNumber, index) => (
                                                    <div key={index}>
                                                        <Field name={`phNumbers[${index}]`} />
                                                        {index > 0 && (
                                                            <button type='button' onClick={() => remove(index)}>
                                                                -
                                                            </button>
                                                        )}
                                                    </div>
                                                ))}
                                                <button type='button' onClick={() => push('')}>
                                                    +
                                                </button>
                                            </div>
                                        )
                                    }}
                                </FieldArray>
                            </div>
                            <button type='button' onClick={() => setFormValues(savedValues)}>Load saved data</button>
                            <button type="submit" disabled={ !fprops.isValid || fprops.isSubmitting }>Submit</button>
                        </Form>
                    )
                }
            }

        </Formik>
    )
}

export default YoutubeForm