import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import { AppRouter } from './AppRouter';
import './controllers/LoginController';
import './controllers/RootController';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
// just for encoding, used random key value
app.use(cookieSession({ keys: ['0#!@412512DzxFere'] }));

app.use(AppRouter.getInstance());

app.listen(3000, () => {
  console.log('listening on port 3000');
});
