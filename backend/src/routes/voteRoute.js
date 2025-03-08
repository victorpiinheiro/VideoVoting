// importações biblioteca
import { Router } from 'express';

// improtação controller
import VoteController from '../controllers/VoteController';

const route = Router();

route.post('/vote', VoteController.create);

export default route;
