const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SupportTicketSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    subject: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, default: 'open' }, // e.g., 'open', 'in-progress', 'closed'
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date }
});

module.exports = mongoose.model('SupportTicket', SupportTicketSchema);
