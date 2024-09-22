import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const Course = new Schema({

    name: String,
    discription: String,
})
const Courses = mongoose.model('courses', Course);
export default Courses;