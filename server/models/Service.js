const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const serviceSchema = new mongoose.Schema({
    department: {
        type: ObjectId,
        ref: 'department'
    },
    company: {
        type: ObjectId,
        ref: 'company'
    },
    name: {
        en: String,
        fr: String,
        kiny: String,
        sw: String,
        
    },
    description: {
        en: String,
        fr: String,
        kiny: String,
        sw: String,
        
    },
    price: {
        type: String
    },
    pictures: [String]

}, {timestamps: true});

export default mongoose.model("service", serviceSchema);