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
  value: {
    type: Number,
    required: true,
  },
  imagePath: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
  },
  category: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Category'
  }
}));




