import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

const LoginForm = () => {
    const initialValues = {
        email: '',
        password: ''
    }

    const validationSchema = Yup.object({
        email: Yup.string().required('Required'),
        password: Yup.string().required('Required')
    })

    const onSubmit = values => {
        console.log('form values', values);

    }
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {
                (fprops) => {
                    return (
                        <Form>
                            <FormikControl
                                control='input'
                                name='email'
                                label='Email'
                            />
                            <FormikControl
                                control='input'
                                name='password'
                                label='Password'
                            />
                            <button type='submit' disabled={!fprops.isValid}>submit</button>
                        </Form>)
                }
            }

        </Formik>
    )
}

export default LoginForm