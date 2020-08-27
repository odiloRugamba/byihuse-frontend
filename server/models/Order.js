const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const orderSchema = new mongoose.Schema({
    user: {
        type: ObjectId,
        ref: 'user'
    },
    orders: [
        {
            id: { type: mongoose.Schema.ObjectId },
            time: {
                type: Date,
                default: Date.now
            },
            products: [
                {
                    type: ObjectId,
                    ref: 'product',
                    quantity: String
                }
            ],
            totalAmmount: {
                type: Number
            },
            status: {
                type: String,
                enum: ['SENT', 'RECEIVED', 'CANCELED'],
            },
            cancelReason: String
        }
    ]
}, {timestamps: true});

export default mongoose.model("order", orderSchema);