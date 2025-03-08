import { Router } from 'express';

import tokenController from '../controllers/TokenController';

const route = Router();

route.post('/token', tokenController.store);

export default route;
