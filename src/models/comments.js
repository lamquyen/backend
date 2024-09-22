import mongoose from 'mongoose';
import Collections from '../../database/collections.js';

const Schema = mongoose.Schema;
const commentSchema = new Schema({
    userName: String,
    email: String
});

const commentsModel = mongoose.model(Collections.COMMENTS, commentSchema);
export default commentsModel;
