import express from 'express';
import cors from 'cors';
import { userRoutes } from './user.routes';


const app = express();

app.use(express.json());
app.use(cors());

app.use(userRoutes);

app.listen(3333, () => {
    console.log('server is running!!!')
});
