import React, { useState } from 'react'
import Form from '../../components/common/Form'
import { registerFormControls } from '../../components/config'
import './common.css'
import api from '../../services/api';
import {useNavigate} from 'react-router-dom'

const SignupPage = () => {
  const navigate = useNavigate()
  const initialState = {
    username: '',
    email: '',
    password: ''
  }
  const [formData, setFormData] = useState(initialState)
  const [status, setStatus] = useState({ success: false, error: '' }) 
   
  const onSubmit = async(e) => {
    e.preventDefault();

    try {
      const {data} = await api.post('/api/auth/register', formData); 
      console.log('Registration successful:', data);
      setStatus({success: true, error: ''});
      setFormData(initialState);
      navigate('/auth/login')

    } catch (err) {
      setStatus({
        success: false,
        error: err.response?.data?.message || 'Registration failed. Please try again.',
      });
    }
  }

  const { success, error } = status;
 
  return (
    <div className='container'>
      <div className='heading_container'>
        <h1>Create Account</h1>
      </div>
      {success && <p className='success_message'>Registration successful!</p>}
      {error && <p className='error_message'>{error}</p>}
      <Form formControls={registerFormControls} buttonText={'Sign up'} formData={formData} setFormData={setFormData} onSubmit={onSubmit} />
    </div>
  )
}

export default SignupPage
