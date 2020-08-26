/**
 * IMPORTS
 */
import express = require('express');
import { ProductController } from './commons/controllers/product-controller';

/**
 * CONSTANTS
 */
const app = express();
const cors = require('cors');

/**
 * APP CONFIG
 */
app.use(cors({ origin: true }));
app.use(express.json());
app.use(express.urlencoded());
app.set('port', process.env.PORT || 3000);


/**
 * ROUTES
*/
app.get('/', (req, res) => {
    res.send('default');
});

// POST CREATE PRODUCT
app.post('/api/product/create', async (req, res) => await ProductController.create(req, res));

// GET PRODUCTO RECOMMENDED
app.get('/api/product/recommended/:paginate?', async (req, res) => await ProductController.recommended(req, res));

// FIND PRODUCT B7Y SLUG
app.get('/api/product/find/:slug', async (req, res) => await ProductController.findBySlug(req, res));


export default app;