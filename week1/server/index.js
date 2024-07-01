import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/User.js';

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello');
    }
);

app.use('/user', userRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));