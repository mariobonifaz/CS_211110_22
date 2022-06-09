
import express from 'express';
import { api } from '../config.js';
import user from './components/user/network.js';

const app = express();

app.use('/api/user', user);

app.listen(api.port, () => {
    console.log(`puerto escuchando en ${api.port}`)
});
