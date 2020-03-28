import {Router} from 'express';
import OngController from './controllers/OngController';
import IncidentsController from './controllers/IncidentsController';
import SessionController from './controllers/SessionController';

const routes = new Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.remove);

export default routes;