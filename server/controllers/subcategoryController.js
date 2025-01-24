import Category from '../models/Category.js';
import Subcategory from '../models/Subcategory.js';


export const addSubCategory = async (req, res) => {
    const { subCategoryName, category } = req.body;
  
    if (!subCategoryName || !category) {
      return res.status(400).json({ message: 'Sub-category name and category are required' });
    }
  
    // Check if the category exists
    const categoryExists = await Category.findById(category);
    if (!categoryExists) {
      return res.status(404).json({ message: 'Category not found' });
    }
  
    const subCategory = await Subcategory.create({ subCategoryName, category });
    res.status(201).json({ message: 'Sub-category created successfully', subCategory });
  };



export const getSubcategory = async (req, res) => {
    const subCategories = await Subcategory.find().populate('category', 'categoryName');
    res.status(200).json(subCategories);
}
