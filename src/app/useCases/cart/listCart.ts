import { Request, Response } from 'express';

import { Cart } from '../../models/Cart';

export async function listCart(req: Request, res: Response) {
  try {
    const { products, userId } = req.params;

    if(!products) {
      res.status(500).json({
        error: 'Products not found',
        message: 'Invalid request params'
      });
    }

    const currentCart = await Cart.find({'userId': `${userId}`});
  
    const cart = await Cart.create({ products });
  
    res.status(201).json(cart);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }

}