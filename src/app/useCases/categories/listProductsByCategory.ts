import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export async function listProductsByCategory(req: Request, res: Response) {
  try {
    const { categoryId } = req.params;

    const PAGE_LIMIT = 9;
    const page = parseInt(req.query.page || '0' as any) ;
    
    const products = await Product.find().where('category').equals(categoryId).populate('category').limit(PAGE_LIMIT).skip(PAGE_LIMIT * page);
  
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}