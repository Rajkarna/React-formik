import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

function CourseEnrollmentForm () {
  const selectOptions = [
    { key: 'select options', value: '' },
    { key: 'Doctor', value: 'Doctor' },
    { key: 'Engineer', value: 'Engineer' }
  ]

  const checkOptions = [
    { key: 'HTML', value: 'HTML' },
    { key: 'Css', value: 'Css' },
    { key: 'Python', value: 'Python' }
  ]
  const initialValues = {
    email: '',
    bio: '',
    course: '',
    skillset: [],
    date: null
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Required'),
    bio: Yup.string().required('Required'),
    course: Yup.string().required('Required'),
    skillset: Yup.array().min(1, 'Required').required('Required'),
    date: Yup.date().nullable().required('Required')
  })

  const onSubmit = values => {
    console.log('Form data', values)
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formik => {
        return (
          <Form>
            <FormikControl
              control='input'
              type='email'
              label='Email'
              name='email'
            />
            <FormikControl
              control='input'
              type='text'
              label='Bio'
              name='bio'
            />
            <FormikControl
              control='select'
              type='text'
              label='Select Course'
              name='course'
              options={selectOptions}
            />
            <FormikControl
              control='checkbox'
              label='select check box'
              name='skillset'
              options={checkOptions}   
            />
            <FormikControl
              control='date'
              type='text'
              label='Date'
              name='date'
            />
            <button type='submit' disabled={!formik.isValid}>
              Submit
            </button>
          </Form>
        )
      }}
    </Formik>
  )
}

export default CourseEnrollmentForm