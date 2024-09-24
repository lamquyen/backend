import mongoose from 'mongoose';

const { Schema } = mongoose;

const commentSchema = new Schema({
    id: { type: String, required: true, unique: true },  // Mã comment duy nhất
    postId: { type: String, ref: 'post', required: true },  // Liên kết tới Post
    content: { type: String, required: true },  // Nội dung comment
    authorId: { type: String, ref: 'user', required: true },  // Liên kết tới User
}, { timestamps: true });  // Thêm ngày tạo và cập nhật

const CommentModel = mongoose.model('comments', commentSchema);
export default CommentModel;
