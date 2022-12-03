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
    required: true,
  },
  rating: {
    type: Number,
  },
  productAttributes: [{
    size: {
      type: String,
    }, 
    brand: {
      type: String,
      required: true,
    },
    color: {
      type: String,
    }
  }],
  category: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Category'
  }
}));




