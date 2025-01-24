import express from 'express'
import { addSubCategory, getSubcategory } from '../../controllers/subcategoryController.js';
const router = express.Router();

router.post('/add-sub-category', addSubCategory);
router.get('/', getSubcategory);

export default router;
