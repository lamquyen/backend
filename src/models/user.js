import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const userModel = new Schema({
    userName: { type: String, required: true },
    email: String,
    age: Number,
    avatar: String,
    role: String,
    password: { type: String, required: true }
}, { timestamps: true })
const Users = mongoose.model('users', userModel);
export default Users;