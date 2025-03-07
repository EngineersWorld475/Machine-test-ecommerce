import React from 'react'
import './dashboard.css'
const Dashboard = () => {
    return (
        <div className='dashboard_container'>
            <div className='top_header'>
            <p>Home</p>
            <div className='button_container'>
                <button>Add category</button>
                <button>Add sub category</button>
                <button>Add product</button>
            </div>
        </div>
        </div>

    )
}

export default Dashboard
