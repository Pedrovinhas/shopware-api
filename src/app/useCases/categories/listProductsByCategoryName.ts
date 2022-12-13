import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export async function listProductsByCategoryName(req: Request, res: Response) {
  try {
    const { categoryName } = req.params;
    console.log(categoryName);
    
    const products = await Product.find().where('category').equals(categoryName).populate('category');
  
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}