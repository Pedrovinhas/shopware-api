import path from 'node:path';
import express from 'express';
import mongoose from 'mongoose';
import { router } from './app/routes';
import 'dotenv/config';

const PORT = process.env.PORT || 3003;

mongoose.connect(`${process.env.MONGODB_URI}`)
  .then(() => {
    const app = express();
    const port = 3003;    

    app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', '*');
      res.setHeader('Access-Control-Allow-Headers', '*');

      next();
    });
    app.use(express.static('public'));
    // app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
    app.use(express.json());
    app.use(router);

    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${port}`);
    });  

  })
  .catch(() => console.log('❌ Erro ao conectar ao MongoDB'));



 