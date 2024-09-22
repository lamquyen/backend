import express from 'express';

import { v4 as uuidv4 } from 'uuid';

import mongoose from 'mongoose';
import commentsModel from './src/models/comments.js'
import UsersModel from './src/models/Users.js';
import postModel from './src/models/post.js';
import connect from './src/config/db/index.js';
import Courses from './src/models/course.js'
//connect to DB
connect();
// mongoose.connect("mongodb+srv://chauquyen1233:aFMV7wvFBLtghbOJ@cluster0.kb6mf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/wien_lam_database")
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
