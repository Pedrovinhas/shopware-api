import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export async function listOneProductByCategory(req: Request, res: Response) {
  try {
    const { categoryId, productId } = req.params;
    
    const product = await Product.findById(productId).where('category').equals(categoryId);
  
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}