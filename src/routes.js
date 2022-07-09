import { Router } from 'express';
import * as MessageController from './constrollers/message.js';
const routes = Router();

routes.get('/', (request, response) => {
    response.send('API Tech Academy - Iniciando servidor');
});

routes.post('/message', MessageController.message);

export default routes;