import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export async function listOneProduct(req: Request, res: Response) {
  try {    
    const { productId } = req.params;
    
    const product = await Product.findById(productId).populate('category');
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }

}