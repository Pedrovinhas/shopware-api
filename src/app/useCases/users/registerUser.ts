import { Request, Response } from 'express';

import User from '../../models/User';

export async function registerUser(req: Request, res: Response) {
  const { 
    name, 
    email, 
    password, 
    phone,
    address 
  } = req.body;
  
  try {
    const userExists = await User.findOne({ email });

    if(userExists) {
      return res.status(400).json({
        error: 'Cant do that',
        message: 'User already exists'
      });
    }

    const user = await User.create({ 
      name,
      email,
      password,
      phone,
      address,
      otp : process.env.OTP_CODE
    });
  
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send({error: 'Registration failed', message: 'Registron Failed'});
  }
}

