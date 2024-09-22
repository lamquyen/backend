import express from 'express';

import { v4 as uuidv4 } from 'uuid';

import mongoose from 'mongoose';
import commentsModel from './src/models/comments.js'
import UsersModel from './src/models/Users.js';
import postModel from './src/models/post.js';
import connect from './src/config/db/index.js';
//connect to DB
connect();


const app = express();

app.use(express.json());

;

// //cau1
app.listen(8080, () => {
    console.log('Server is running!');
});
app.get('/api/v1/users', async (req, res) => {
    try {
        const users = await UsersModel.find(); // Tìm tất cả người dùng trong database
        res.status(200).json({
            data: users,
            message: 'Lấy danh sách người dùng thành công!',
            success: true
        });
    } catch (error) {
        res.status(500).json({
            message: 'Đã xảy ra lỗi khi lấy danh sách người dùng!',
            error: error.message,
            success: false
        });
    }
});
