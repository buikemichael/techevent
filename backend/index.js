import express from 'express';
import mongoose from 'mongoose';
import logger from 'morgan';
import cors from 'cors';
import index from './routes';
import { mongoDB } from './config/mongo.config';

require('express-async-errors');

const app = express();
const port = process.env.PORT || 3001;

mongoose
  .connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((date) => {
    console.log("connection to mongo DB successful...");
  })
  .catch((error) => {
    console.log(`error connecting to mongo DB database with messsage: ${error.message}`);
    process.exit();
  });

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', index);
app.use((err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
});

app.set('port', port);
app.listen(port, () => {
  console.log(`App running on port ${port}, await DB connection...`);
});
export default app;
