import express from 'express';
import mongoose from 'mongoose';

const MONGO_CONNECTION = 'mongodb+srv://mongo:y6mkzuCTVKWrQ61C@cluster0.3hnfkpo.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGO_CONNECTION)
  .then(() => {
    const app = express();
    const port = 3003;

    app.listen(port, () => {
      console.log(`🚀 Server is running on http://localhost:${port}`);
    });  

  })
  .catch(() => console.log('❌ Erro ao conectar ao MongoDB'));



