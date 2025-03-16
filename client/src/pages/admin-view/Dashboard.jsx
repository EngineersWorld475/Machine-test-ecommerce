import React, { useState } from 'react'
import './dashboard.css'
import api from '../../services/api';
const Dashboard = () => {
    const [showCategoryPopup, setShowCategoryPopup] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleAddCategoryClick = () => {
        setShowCategoryPopup(true);
    };

    const handleClosePopup = () => {
        setShowCategoryPopup(false);
        setError('');
        setSuccess(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const categoryName = e.target.categoryName.value.trim();
        if (!categoryName) {
            setError('Category name is required.');
            return;
        }
        try {
            const response = await api.post('/api/category/add-category', { name: categoryName });
            console.log('Category Added:', response.data);
            setSuccess(true);
            setError('');
            e.target.reset();
            handleClosePopup();
        } catch (err) {
            console.log(err)
            setError(err.response?.data?.message || 'Failed to add category.');
            setSuccess(false);
        }
    };

    return (
        <div className='dashboard_container'>
            <div className='top_header'>
                <p>Home</p>
                <div className='button_container'>
                    <button onClick={handleAddCategoryClick}>Add category</button>
                    <button>Add sub category</button>
                    <button>Add product</button>
                </div>
            </div>
            {showCategoryPopup && (
                <div className="popup_overlay">
                    <div className="popup_form">
                        <h2>Add Category</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="categoryName"
                                placeholder="Enter category name"
                                required
                            />
                            <div className="popup_button_container">
                                <button type="submit">Add</button>
                                <button type="button" onClick={handleClosePopup}>
                                    Discard
                                </button>
                            </div>
                            {error && <p style={{ color: 'red', marginTop: '10px', textAlign:'center' }}>{error}</p>}
                            {success && <p style={{ color: 'green', marginTop: '10px' }}>Category added successfully!</p>}
                        </form>
                    </div>
                </div>
            )}
        </div>

    )
}

export default Dashboard
