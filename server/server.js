import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import morgan from 'morgan';
import router from './routes/index.js';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

const port = process.env.PORT || 8000;
mongoose.connect(`${process.env.MONGO_DB}`, {
  useNewUrlParser: true,
});

// http get request
app.get('/', (req, res) => {
  res.status(201).json('Home GET');
});

app.use('/', router);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error'));
db.once('open', () => {
  app.listen(port, () => {
    console.log(`Server is running at ${port}`);
  });
});
