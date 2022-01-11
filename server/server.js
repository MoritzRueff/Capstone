import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import DogRoutes from './routes/dogs.routes.js';

dotenv.config();

const serverPort = process.env.SERVER_PORT;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_NAME;

const connectionString = `mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority`;
console.log(connectionString);

mongoose.connect(connectionString);

const server = express();

server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
  res.json({ status: 'Server is up and running' });
});

// server.use('/api', [DogRoutes]);
server.use(DogRoutes);

server.listen(serverPort, () => console.log('Server started'));