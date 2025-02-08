import React from 'react'
import { Outlet } from 'react-router-dom'
import './authlayout.css'

const AuthLayout = () => {
    return (
        <div className='layout_container'>
            <div className='left_section'>
                <div className='text_container'>
                        <h1>Welcome Back!</h1>
                    <div className='paragraph_container'>
                        <p>To keep connected with us please login with your personal info</p>
                    </div>
                    <button className='button_container'>SIGN IN</button>
                </div>
            </div>
            <div className='right_section'>
                <Outlet />
            </div>
        </div>
    )
}

export default AuthLayout
