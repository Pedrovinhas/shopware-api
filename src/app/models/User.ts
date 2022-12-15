import mongoose from 'mongoose';

import bcrypt from 'bcryptjs';

const User = new mongoose.Schema({
  name: {
    type: String,
  },
  phone: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
    length: 3
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    match: /.+@.+\..+/,
    sparse: true,
    index: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
});

User.methods.matchPassword = async function(enteredPassword: string) {
  return await bcrypt.compare(enteredPassword, this.password);
};

User.pre('save', async function (next) {
  const hashedPassword = await bcrypt.hash(this.password, 12);
  this.password = hashedPassword;

  next();
});

export default mongoose.model('User', User);





