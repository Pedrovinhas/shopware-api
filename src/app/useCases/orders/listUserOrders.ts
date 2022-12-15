import { Request, Response } from 'express';

import { Order } from '../../models/Order';

export async function listUserOrders(req: Request, res: Response) {
  try {
    const userId = req.userId;
    console.log(userId);

    const userOrdersList = await Order.find({user: userId})
      .sort({ createdAt: 1})
      .populate('products.product')
      .populate('user', 'name email');
  
    if(!userOrdersList) {
      res.status(500).json({
        error: 'Cant find a user with this id'
      });
    }
    res.status(200).json(userOrdersList);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }

}