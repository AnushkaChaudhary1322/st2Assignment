import mongoose from 'mongoose';

const participantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    event: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },

}, { timestamps: true });

export default mongoose.model('Participant', participantSchema);
