import React from 'react'
import './App.css'
import YoutubeForm from './components/YoutubeForm'
import PracticeForm from './components/PracticeForm'
import FormikContainer from './components/FormikContainer'
import LoginForm from './components/LoginForm'
import RegistrationForm from './components/RegistrationForm'
import CourseEnrollmentForm from './components/cousreEnrollmentForm'

const App = () => {
  return (
    <div className='App'>
      {/* <YoutubeForm /> */}
      {/* <FormikContainer /> */}
      {/* <LoginForm /> */}
      {/* <RegistrationForm /> */}
      <CourseEnrollmentForm />
    </div>
  )
}

export default App