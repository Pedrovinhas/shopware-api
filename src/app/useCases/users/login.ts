import { Request, Response } from 'express';

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


import User from '../../models/User';

export async function loginUser(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');
    console.log(user);

    if(!user) {
      res.status(401).json({
        error: 'User not found',
        message: 'User not exist in db'
      });
    }

    // console.log(user?.password, 'oi');
    
    const isValidPassword = await bcrypt.compare(password, user!.password);

    if(!isValidPassword) {
      return res.status(401).json({
        error: 'Password incorrect',
        message: 'Password not valid'
      });
    }

    const token = jwt.sign({ id: user?.id}, 'secret', { expiresIn: '1d'}); // secret must be in .env to avoid 
    
    const userWithoutPassword = await User.findOne({email});
    return res.json({
      // user,
      userWithoutPassword,
      token
    });

  } catch (error) {
    console.log(error);
    res.status(500).send({error: 'Login', message: 'Login Failed'});
  }
}

