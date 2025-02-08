import React, { useState } from 'react'
import Form from '../../components/common/Form'
import { loginFormControls } from '../../components/config'
import './common.css'

const LoginPage = () => {
  const initailState = {
    email: '',
    password: ''
  }
  
  const onSubmit = () => {

  }
  const [formData, setFormData] = useState(initailState)
  return (
    <div className='container'>
      <div className='heading_container'>
        <h1>Sign In to Your Account</h1>
      </div>
      <Form formControls={loginFormControls} buttonText={'SIGN IN'} formData={formData} setFormData={setFormData} onSubmit={onSubmit} />
    </div>
  )
}

export default LoginPage
