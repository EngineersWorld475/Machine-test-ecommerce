import Category from '../models/Category.js';
import { createError } from '../utils/errorHandler.js';


export const addCategory = async (req, res, next) => {
  try {
    const { name } = req.body;

    if (!name) {
      return next(createError(400, 'Category name is required'));
    }

    const existingCategory = await Category.findOne({ name });
    if (existingCategory) {
      return next(createError(409, 'Category already exists'));
    }

    const newCategory = new Category({ name });
    await newCategory.save();

    res.status(201).json({
      message: 'Category added successfully',
      category: newCategory,
    });
  } catch (error) {
    next(error)
  }
};

export const getCategories = async (req, res, next) => {
    try {
    const categories = await Category.find();
  
    res.status(200).json({
      success: true,
      data: categories,
    });
    } catch (error) {
        next(error)
    }
}
