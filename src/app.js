import express from 'express';
import cors from 'cors';

import { homeRouter } from './routes/home.route';
import { cryptocurrenciesRouter } from './routes/cryptocurrencies.route';
import { userRouter } from './routes/user.route';

const app = express();

// Middlewares
app.use(cors({
    origin: ['https://dogewisdom.netlify.app', 'https://dogewisdom.com', 'https://www.dogewisdom.com', 'http://localhost:3000'],
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Routes
app.use('/', homeRouter);
app.use('/api', cryptocurrenciesRouter);
app.use('/api', userRouter);

export { app };
