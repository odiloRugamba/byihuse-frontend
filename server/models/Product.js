const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const productSchema = new mongoose.Schema({
    department: {
        type: ObjectId,
        ref: 'department'
    },
    category: {
        type: ObjectId,
        ref: 'category'
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
    isMadeInRwanda: Boolean,
    price: {
        type: Number
    },
    pictures: [String]

}, {timestamps: true});

export default mongoose.model("product", productSchema);