import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export async function createProduct(req: Request, res: Response) {
  try {
    const imagePath = req.file?.filename || '';
    const { name, model, price, rating, category, productAttributes } = req.body;

    const product = await Product.create({
      name,
      model,
      imagePath,
      price: Number(price),
      category,
      rating: Number(rating),
      productAttributes: productAttributes ? JSON.parse(productAttributes) : [],
    });
  
    res.status(201).json(product);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }

} 