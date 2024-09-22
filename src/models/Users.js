import mongoose from 'mongoose';
import Collections from '../../database/collections.js';
const Schema = mongoose.Schema;
const userSchema = new Schema({
    userName: String,
    email: String
});
const UserModel = mongoose.model(Collections.USERS, userSchema);
export default UserModel;