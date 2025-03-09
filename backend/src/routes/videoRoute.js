// importações biblioteca
import { Router } from 'express';

// improtação controller
import videoController from '../controllers/VideoController';

const route = Router();

route.post('/videos', videoController.createVideo);
route.put('/videos/:id', videoController.updateVideo);
route.get('/videos', videoController.index);
route.get('/videos/rating', videoController.show);
route.get('/videos/rating/:id', videoController.mostraVideoById);
route.delete('/videos/:id', videoController.delete);

export default route;
