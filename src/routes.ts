import ItemsController from './controllers/itemsController'
import PointsController from './controllers/pointsController'
import express from 'express';

const routes = express.Router();
const pointsController = new PointsController;
const itemsController = new ItemsController;


routes.get('/items', itemsController.index);

routes.post('/points', pointsController.index);
routes.post('/points', pointsController.create);
routes.get('/points:id', pointsController.show);


export default routes;