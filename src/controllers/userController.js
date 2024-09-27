import postModel from '../models/post.js';
const createPost = async (req, res) => {
    try {
        let { content, userId } = req.body;
        if (content.length <= 8) {
            return res.tatus(200).send('cần tối thiểu 9 kí tự trong content')
        } else {
            content = content.trim();
        }


    } catch (error) {

    }
}
export default createPost;