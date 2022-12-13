import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export async function listProducts(req: Request, res: Response) {
  try {
   
    const PAGE_LIMIT = 9;
    const page = parseInt(req.query.page || '0' as any) ;

    const products = await Product.find()
      .limit(PAGE_LIMIT)
      .skip(PAGE_LIMIT * page);

 
    
    // const filteredProducts = await Product.find({color: 'Black', size: 'Big', brand: 'Zara'});
  

    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }

}