import { Formik, Form, ErrorMessage, Field, FieldArray } from 'formik'
import React from 'react'
import * as Yup from 'yup';

const initialValues = {
    name: '',
    email: '',
    channel: '',
    comments:'',
    address:'',
    social:{
        facebook:'',
        twitter:''
    },
    phoneNo:['',''],
    phoneNumbers:['']
}

const onSubmit = values => {
    console.log(values);
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().required('Required'),
    channel: Yup.string().required('Required'),
    comments: Yup.string().required('Required'),
    address: Yup.string().required('Required')
})

const PracticeForm = () => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            <Form>
                <div className='form-control'>
                    <label htmlFor='name'>name</label>
                    <Field type='text' id='name' name='name' />
                </div>
                <ErrorMessage name='name' component={'div'} className='error' />
                <div className='form-control'>
                    <label htmlFor='email'>email</label>
                    <Field type='text' id='email' name='email' />
                    <ErrorMessage name='email' component={'div'} className='error' />

                </div>
                <div className='form-control'>
                    <label htmlFor='channel'>channel</label>
                    <Field type='text' id='channel' name='channel' />
                    <ErrorMessage name='channel' component={'div'} className='error' />

                </div>
                <div className='form-control'>
                    <label htmlFor='comments'>comments</label>
                    <Field as='textarea' type='text' id='comments' name='comments' />
                    <ErrorMessage name='comments' component={'div'} className='error' />

                </div>
                <div className='form-control'>
                    <label htmlFor='facebook'>facebook</label>
                    <Field  type='text' id='facebook' name='social.facebook' />

                </div>
                <div className='form-control'>
                    <label htmlFor='twitter'>twitter</label>
                    <Field  type='text' id='twitter' name='social.twitter' />

                </div>
                <div className='form-control'>
                    <label htmlFor='phoneNo'>phoneNo</label>
                    <Field type='text' id='phoneNo' name='phoneNo[0]' />

                </div>
                <div className='form-control'>
                    <label htmlFor='phoneNo'>phoneNo</label>
                    <Field  type='text' id='phoneNo' name='phoneNo[1]' />

                </div>
                <div className='form-control'>
                    <label htmlFor='address'>address</label>
                    <Field name='address'>
                        {
                            props => {
                                const {field, meta} = props;
                                return (
                                    <div>
                                        <input type='text' id='address' {...field} />
                                        {meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
                                    </div>
                                )
                            }
                        }
                    </Field>
                </div>
                <div className='form-control'>
                    <label htmlFor='phoneNumbers'>phoneNumbers</label>
                    <FieldArray name='phoneNumbers'>
                        {
                            (fieldArrayProps) => {
                                const {push, remove, form} = fieldArrayProps;
                                const {values} = form;
                                const {phoneNumbers} = values;
                                return (
                                    <div>
                                        {
                                            phoneNumbers.map((phone, index) => (
                                                <div key={index}>
                                                    <Field name={`phoneNumbers[${index}]`} />
                                                    {index > 0 && <button type='button' onClick={() => remove(index)}>remove</button>}
                                                </div>
                                            ))
                                        }
                                        <button type='button' onClick={() => push('')}>add</button>
                                    </div>
                                )
                            }
                        }
                    </FieldArray>
                </div>
                <div className='form-control'>
                    <button type='submit'>submit</button>
                </div>
            </Form>
        </Formik>
    )
}

export default PracticeForm