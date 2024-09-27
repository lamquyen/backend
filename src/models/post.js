import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const postSchema = new Schema({
    userId: String,
    content: String,
    isPublic: Boolean
}, { timestamps: true });
const postModel = mongoose.model('posts', postSchema);
export default postModel;