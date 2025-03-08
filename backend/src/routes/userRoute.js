import { Router } from 'express';

import userController from '../controllers/UserController';

const route = Router();

route.post('/register', userController.store);
route.get('/users', userController.index);
route.delete('/user/:id', userController.delete);
route.put('/user/:id', userController.update);

export default route;
