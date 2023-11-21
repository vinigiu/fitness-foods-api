import * as express from 'express';
import apiController from '../controllers/api';
import productController from '../controllers/productController';

const router = express.Router();

router.get('/', apiController.getApi);
router.get('/products', productController.getAllProducts);
router.get('/products/:code', productController.getProduct);
router.post('/products/:code', productController.createProduct);
router.put('/products/:code', productController.updateProduct);
router.delete('/products/:code', productController.deleteProduct);

export default router;