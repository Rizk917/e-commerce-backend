import express from 'express';
import dotenv from 'dotenv';
import db from './config/db.js';
import productRoute from './routes/products.routes.js';
import categoryRoute from './routes/categories.routes.js';
import userRoute from './routes/user.route.js';
import orderRouter from './routes/order.routes.js';
import bodyParser from 'body-parser';
import errorHandler from './middleware/error.middleware.js';
import cartRoutes from './routes/cartRoutes.js';

dotenv.config();

const port = process.env.PORT || 5000;

await db();

const app = new express();

app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

//Routes
app.get('/', (req, res) => {
  res.send('hello world');
});
app.use('/products', productRoute);
app.use('/categories', categoryRoute);
app.use('/user', userRoute);
app.use('/order', orderRouter);
app.use('/cart', cartRoutes);
/*******************/

app.use(errorHandler);

app.listen(port, () => {
  console.log(`API IS RUNNING ON PORT: ${port}`);
});
