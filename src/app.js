import express, { json } from 'express';
import "express-async-errors";
import cors from 'cors';
import router from './routes/index.routes.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(json());
app.use(router);
app.use(errorHandler);

app.listen(PORT, () => console.log(`--------------- Server running on port ${PORT}`));