import mongoose from 'mongoose';

const subCategorySchema = new mongoose.Schema(
  {
    subCategoryName: {
      type: String,
      required: [true, 'Sub-category name is required'],
      trim: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category', 
      required: [true, 'Category is required'],
    },
  },
  { timestamps: true }
);

export default mongoose.model('SubCategory', subCategorySchema);
