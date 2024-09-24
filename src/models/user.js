import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const User = new Schema({

    name: String,
    discription: String,
})
const Users = mongoose.model('users', User);
export default Users;