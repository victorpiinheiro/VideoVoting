import express from 'express';
import cors from 'cors';

import videoRoute from './src/routes/videoRoute';
import userRoute from './src/routes/userRoute';
import tokenRoute from './src/routes/tokenRoute';
import voteRoute from './src/routes/voteRoute';

class App {
  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes() {
    this.app.use(videoRoute);
    this.app.use(userRoute);
    this.app.use(tokenRoute);
    this.app.use(voteRoute);
  }
}

export default new App().app;
