import { Request, Response } from 'express';

import User from '../../models/User';

export async function index(req: Request, res: Response) {
  try {
    return res.send({ userID: req.userId});
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

