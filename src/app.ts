import express from 'express';
import cors from 'cors';

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