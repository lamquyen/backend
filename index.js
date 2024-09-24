import express from 'express';

import { v4 as uuidv4 } from 'uuid';

import mongoose from 'mongoose';

import connect from './src/config/db/index.js';
import User from './src/models/user.js';
import CommentModel from './src/models/comment.js';

//connect to DB
connect();
// mongoose.connect("mongodb+srv://chauquyen1233:chauquyen1233>@cluster0.kb6mf.mongodb.net/")
//     .then(() => {
//         console.log('kết nối thành công')
//     })
//     .catch(err => {
//         console.log('kết nối thất bại', err)
//     })

const app = express();

app.use(express.json());

;

// //cau1
app.listen(8080, () => {
    console.log('Server is running!');
});
app.get('/api/v1/courses', async (req, res) => {
    try {
        const courses = await Courses.find({})
        res.status(200).send(courses);
        ;

    } catch (error) {
        res.status(400).send({ message: 'Lỗi khi lấy dữ liệu từ courses', error });
    }
});
app.post('/api/v1/comments', async (req, res) => {
    try {
        const { postId, content, authorId } = req.body;
        if (!postId || !content || !authorId) {
            return res.status(400).send({ message: 'Missing required fields!' });
        }
        const commentId = `CMT${Math.floor(Math.random() * 10000)}`;

        // Tạo một comment mới
        const newComment = new CommentModel({
            id: commentId,
            postId,    // ID của bài viết, lấy từ request body
            content,   // Nội dung của comment
            authorId   // ID của người dùng, lấy từ request body
        });
        await newComment.save();

        // Trả về kết quả thành công
        res.status(201).send({ message: 'Comment đã được thêm thành công', newComment });
    } catch (error) {
        res.status(400).send({ message: 'Lỗi khi thêm comment', error });

    }
})
