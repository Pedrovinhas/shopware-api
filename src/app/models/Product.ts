import { model, Schema} from 'mongoose';

export const Product = model('Product', new Schema({
  model: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imagePath: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  rating: {
    type: Number,
  },
  size: {
    type: String,
    enum: ['Large', 'Big', 'Medium', 'Small'],
  }, 
  brand: {
    type: String,
    enum: ['H2C', 'Zara', 'Bibi', 'Prada', 'D&G', 'Chanel'],
  },
  color: {
    type: String,
    enum: ['Black', 'Crimson Red', 'Brown', 'Off-White', 'Seinna Pink'],
  },
  category: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Category'
  }
}));




