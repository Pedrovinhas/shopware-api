import { Request, Response } from 'express';

import jwt from 'jsonwebtoken';

import User from '../../models/User';

export async function loginWithOtp(req: Request, res: Response) {
  try {
    const { otp , phone } = req.body;

    const user = await User.findOne({ phone }).select('+password');
    console.log(user);

    if(!user) {
      res.status(401).json({
        error: 'User not found',
        message: 'User not exist in db'
      });
    }

    console.log(otp);
    console.log(user?.otp);
  
 

    if(process.env.OTP_CODE !== otp ) {
      return res.status(401).json({
        error: 'OTP ERROR',
        message: 'OTP is invalid'
      });
    }

    const token = jwt.sign({ id: user?.id}, 'secret', { expiresIn: '1d'}); // secret must be in .env to avoid 
    
    const userWithoutPassword = await User.findOne({phone});
    return res.json({
      userWithoutPassword,
      token
    });

  } catch (error) {
    console.log(error);
    res.status(500).send({error: 'Login', message: 'Login Failed'});
  }
}

