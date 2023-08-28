const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
const payeeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        mobile: {
            type: String,
        },
        payment_mode: {
            type: String,
            required: true,
        },
        amount: {
            type: Number,
            required: true,
        },
        payment_status: {
            type: String,
            required: true,
        },
        createdby: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        event_type: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);



//Export the model
module.exports = mongoose.model('Payee', payeeSchema);