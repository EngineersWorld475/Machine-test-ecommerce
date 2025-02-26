import React, { useState } from 'react'
import Form from '../../components/common/Form'
import { loginFormControls } from '../../components/config'
import { useDispatch } from 'react-redux'
import { signinFailure, signinStart, signinSuccess } from '../../store/slices/userSlice'
import { useNavigate } from 'react-router-dom'
import './common.css'
import api from '../../services/api'

const LoginPage = () => {
  const initialState = {
    email: '',
    password: ''
  }
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const onSubmit = async(e) => {
    e.preventDefault()
    dispatch(signinStart())
    try {
      const response = await api.post('/api/auth/login', formData)
      console.log('...response', response.data);
      dispatch(signinSuccess(response.data))
      setError('');
      setFormData(initialState);
      navigate('/')
    } catch (err) {
      dispatch(signinFailure(err.response?.data?.message || 'Login failed.'));
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    }
  }
  const [formData, setFormData] = useState(initialState)
  const [error, setError] = useState('');

  return (
    <div className='container'>
      <div className='heading_container'>
        <h1>Sign In to Your Account</h1>
      </div>
      <Form formControls={loginFormControls} buttonText={'SIGN IN'} formData={formData} setFormData={setFormData} onSubmit={onSubmit} />
      {error && <p style={{color:'red', marginTop: '10px'}}>{error}</p>}
    </div>
  )
}

export default LoginPage
