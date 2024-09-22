import mongoose from 'mongoose';
import Collections from '../../database/collections.js';
const Schema = mongoose.Schema;
const postSchema = new Schema({
    authorId: String,
    content: String
});
const postModel = mongoose.model(Collections.POSTS, postSchema);
export default postModel;