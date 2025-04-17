import Participant from '../models/Participant.js';

export const registerParticipant = async (req, res) => {
    try {
        const { name, event, email } = req.body;
        const participant = new Participant({ name, event, email });
        await participant.save();
        res.status(201).json(participant);
    } 
    catch (error) {
        res.status(500).json({ error: 'Failed to register participant' });
    }
};

export const getParticipants = async (req, res) => {
    try {
        const participants = await Participant.find();
        res.status(200).json(participants);
    } 
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch participants' });
    }
};

