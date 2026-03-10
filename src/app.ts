import express from 'express';
import cors from 'cors';
import { router } from './routes/index-routes';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './config/swagger';

export const app = express();

const whitelist = [
    'http://localhost:5173',
]

app.use(express.json());
app.use(cors({
    origin: (origin, callback) => {
        if(!origin || whitelist.includes(origin)){
            callback(null, true)
        }else{
            callback(new Error('Blocked by Cors'))
        }
    }

}))
app.use(router);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

