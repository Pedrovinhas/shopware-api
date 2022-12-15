import { Request, Response } from 'express';

import { Order } from '../../models/Order';

export async function createOrder(req: Request, res: Response) {
  try {
    const { products } = req.body;
    const userID = req.userId;
    
    console.log(userID);
    
  
    const order = await Order.create({ 
      products, 
      user: req.userId
    });
  
    res.status(201).json(order);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }

}