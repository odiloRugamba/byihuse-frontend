const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String
    },
    password: String,
    role: {
        type: String,
        enum: ['SUPER-ADMIN', 'DEPARTMENT-ADMIN', 'CASHIER', 'AGENT', 'CLIENT']
    },
    assignedDepartments: [
        {
            type: ObjectId,
            ref: 'department'  
        }
    ],
    isVerfied: {
        type: Boolean,
        default: false
    },
}, {timestamps: true});

export default mongoose.model("user", userSchema);