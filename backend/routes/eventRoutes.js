import express from 'express';
import { registerParticipant, getParticipants } from '../controllers/eventController.js';

const router = express.Router();

router.post('/register', registerParticipant);
router.get('/show', getParticipants);

export default router;
