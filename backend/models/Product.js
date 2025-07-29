import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: Number,
  image: String,
  category: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Product', productSchema); 