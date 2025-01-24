import React, { useEffect, useState } from 'react'
import './dashboard.css'
import api from '../../services/api';
const Dashboard = () => {
    const [showCategoryPopup, setShowCategoryPopup] = useState(false);
    const [showSubCategoryPopup, setShowSubCategoryPopup] = useState(false);
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleAddCategoryClick = () => {
        setShowCategoryPopup(true);
    };

    const handleAddSubCategoryClick = () => {
        setShowSubCategoryPopup(true);
    };

    const handleClosePopup = () => {
        setShowCategoryPopup(false);
        setShowSubCategoryPopup(false);
        setError('');
        setSuccess(false);
    };

    // handling category submit

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

    // handling sub category submit
    
    const handleSubCategorySubmit = async (e) => {
        e.preventDefault();
        const categoryId = e.target.categoryId.value;
        const subCategoryName = e.target.subCategoryName.value.trim();

        if (!categoryId || !subCategoryName) {
            setError('Both category and subcategory name are required.');
            return;
        }

        try {
            const response = await api.post('/api/sub-category/add-sub-category', {
                category: categoryId,
                subCategoryName: subCategoryName,
            });
            console.log('Subcategory Added:', response.data);
            setSuccess(true);
            setError('');
            e.target.reset();
            handleClosePopup();
        } catch (err) {
            console.log(err);
            setError(err.response?.data?.message || 'Failed to add subcategory.');
            setSuccess(false);
        }
    };

    useEffect(() => {

        // fetching all categories
        const fetchCategories = async () => {
            try {
                const response = await api.get('/api/category/get-categories');
                setCategories(response.data || []);
            } catch (err) {
                console.error('Failed to fetch categories:', err);
            }
        };
        fetchCategories();
    }, []);
    console.log('categories', categories)
    return (
        <div className='dashboard_container'>
            <div className='top_header'>
                <p>Home</p>
                <div className='button_container'>
                    <button onClick={handleAddCategoryClick}>Add category</button>
                    <button onClick={handleAddSubCategoryClick}>Add sub category</button>
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
            {/* sub category popup */}
            {showSubCategoryPopup && (
                <div className="popup_overlay">
                    <div className="popup_form">
                        <h2>Add Subcategory</h2>
                        <form onSubmit={handleSubCategorySubmit}>
                            <select name="categoryId" required>
                                <option value="">Select a category</option>
                                {categories.data.map((category) => (
                                    <option key={category._id} value={category._id}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                            <input
                                type="text"
                                name="subCategoryName"
                                placeholder="Enter sub category name"
                                required
                            />
                            <div className="popup_button_container">
                                <button type="submit">Add</button>
                                <button type="button" onClick={handleClosePopup}>
                                    Discard
                                </button>
                            </div>
                            {error && <p style={{ color: 'red', marginTop: '10px', textAlign: 'center' }}>{error}</p>}
                            {success && <p style={{ color: 'green', marginTop: '10px' }}>Subcategory added successfully!</p>}
                        </form>
                    </div>
                </div>
            )}
        </div>

    )
}

export default Dashboard
