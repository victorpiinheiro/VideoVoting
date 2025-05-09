import { Router } from 'express';

import userController from '../controllers/UserController';

const route = Router();

route.post('/register', userController.store);
route.get('/users', userController.index);
route.get('/user/:id', userController.show);
route.delete('/user/:id', userController.delete);
route.put('/user/edit/:id', userController.update);
route.put('/user/password/:id', userController.updatePassword);

export default route;
