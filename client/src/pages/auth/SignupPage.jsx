import React, { useState } from 'react'
import Form from '../../components/common/Form'
import { registerFormControls } from '../../components/config'
import './common.css'

const SignupPage = () => {
  const initailState = {
    username: '',
    email: '',
    password: ''
  }
  
  const onSubmit = () => {

  }
  const [formData, setFormData] = useState(initailState)
  return (
    <div className='container'>
      <div className='heading_container'>
        <h1>Create Account</h1>
      </div>
      <Form formControls={registerFormControls} buttonText={'Sign up'} formData={formData} setFormData={setFormData} onSubmit={onSubmit} />
    </div>
  )
}

export default SignupPage
