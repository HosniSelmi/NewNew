import mongoose from "mongoose"

const model = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    }
});

export default new mongoose.model("Services", model)
//export default mongoose.models['User'] || mongoose.model('User', model)