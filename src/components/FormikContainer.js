import { Form, Formik } from 'formik'
import '../NewApp.css'
import React from 'react'
import * as Yup from 'yup';
import FormikControl from './FormikControl';

const FormikContainer = () => {
    const initialValues = {
        email: '',
        comments: '',
        select: '',
        radioOption:'',
        checkOption:[],
        datePicker: null
    }

    const options = [
        { key: 'Select Option', value: '' },
        { key: 'Option 1', value: 'option1' },
        { key: 'Option 2', value: 'option2' },
        { key: 'Option 3', value: 'option3' }
    ]

    const radioOptions = [
        { key: 'Radio Option 1', value: 'roption1' },
        { key: 'Radio Option 2', value: 'roption2' },
        { key: 'Radio Option 3', value: 'roption3' }
    ]

    const checkboxOptions = [
        { key: 'check Option 1', value: 'coption1' },
        { key: 'check Option 2', value: 'coption2' },
        { key: 'check Option 3', value: 'coption3' }
    ]

    const validationSchema = Yup.object({
        email: Yup.string().required('Required!'),
        comments: Yup.string().required('Required!'),
        select: Yup.string().required('Required!'),
        radioOption: Yup.string().min(1, 'Please select at least one radio').required('required'),
        checkOption : Yup.array().min(1, 'Please select at least one checkbox').required('required'),
        datePicker: Yup.date().nullable().required('Required!'),
    });

    const onSubmit = values => console.log('form values', values)
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        // validateOnMount
        >
            {
                (formik) => (
                    <Form>
                        {console.log(formik.errors)}
                        <FormikControl label='Email' control='input' name='email' type='email' id='email' />
                        <FormikControl label='Comments' control='textarea' as='textarea' name='comments' type='text' id='comments' />
                        <FormikControl label='Select Options' options={options} control='select' name='select' type='text' id='select' />
                        <FormikControl
                            control='radio'
                            label='Radio topic'
                            name='radioOption'
                            options={radioOptions}
                        />
                         <FormikControl
                            control='checkbox'
                            label='checkbox options'
                            name='checkOption'
                            options={checkboxOptions}
                        />
                         <FormikControl
                            control='date'
                            label='Pick a date'
                            name='datePicker'
                        />
                        <button type='submit'>Submit</button>
                    </Form>
                )
            }
        </Formik>
    )
}

export default FormikContainer