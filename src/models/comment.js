import mongoose from 'mongoose';

const { Schema } = mongoose;

const commentSchema = new Schema({
    postId: { type: String, ref: 'post', required: true },
    userId: { type: String, ref: 'user', required: true },
    content: { type: String, required: true },
}, { timestamps: true });

const CommentModel = mongoose.model('comments', commentSchema);
export default CommentModel;
