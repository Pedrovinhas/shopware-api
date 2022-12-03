import { model, Schema } from 'mongoose';

export const Order = model('Order',  new Schema({
  status: {
    type: String,
    enum: ['WAITING', 'SHIPPING', 'DONE'],
    default: 'WAITING'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  products: {
    required: true,
    type: [{
      product: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Product'  // Referência a Entidade de Produto
      },
      quantity: {
        type: Number,
        default: 1,
      }
    }]
  }
}));
