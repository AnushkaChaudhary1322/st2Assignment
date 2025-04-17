import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import eventRoutes from './routes/eventRoutes.js';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/events', eventRoutes);

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
  app.listen(5000, () => console.log('Server running on port 5000'));
}).catch((err) => console.error('MongoDB connection error:', err));
