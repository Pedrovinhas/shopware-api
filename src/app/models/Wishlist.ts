import { model, Schema } from 'mongoose';

export const Wishlist = model('Wishlist',  new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  products: {
    required: true,
    type: [{
      product: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Product'  // Refer to Product Entity
      },
    }]
  }
}));
