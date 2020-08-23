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


app.post('/api/product/create', async (req, res) => await ProductController.create(req, res));

app.get('/api/product/recommended', async (req, res) => await ProductController.recommended(req, res));

export default app;