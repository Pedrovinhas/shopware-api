import { Request, Response } from 'express';

import User from '../../models/User';

export async function registerWithPhone(req: Request, res: Response) {
  const randomUser = 'User';
  
  const { 
    phone,
    password,
    otp,
    email,
    name,
  } = req.body;


  
  try {
    const userExists = await User.findOne({ phone });

    if(userExists) {
      return res.status(400).json({
        error: 'Cant do that',
        message: 'User already exists'
      });
    }

    const hasEmail = email === '' ? `random${Math.round(Math.random() * 100)}@hotmail.com` : email;

    const user = await User.create({ 
      phone,
      name: randomUser + Math.floor(Math.random() * 10000),
      password: Math.floor(Math.random() * 10000),
      email: hasEmail,
      otp : process.env.OTP_CODE
    });
  
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send({error: 'Registration failed', message: 'Registron Failed'});
  }
}

