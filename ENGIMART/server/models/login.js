import mongoose from "mongoose";


const loginSchema = new mongoose.Schema({
    email: {type: mongoose.Schema.Types.ObjectId, required: true},
    senha: {type: String, required: true},
    created_at: {type: Date, default: Date.now}
}, {versionKey: false});

const login = mongoose.model('login', loginSchema);

export default login;