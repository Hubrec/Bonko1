import express from 'express';
import { createServer } from 'http';
import api from './api';
import { connect } from './api/config/database';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', api);

const server = createServer(app);

connect()
    .then(() => {
        server.listen(3333, () => {
            console.log('Server listening on port 3333');
        });
    })
    .catch((err) => {
        console.error('DB error : ', err);
    });