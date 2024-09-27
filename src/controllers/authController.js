import userModel from "../models/user.js";
import { v4 as uuidv4 } from 'uuid';
const register = async (req, res) => {
    try {
        let { userName, email, password } = req.body;

        if (!email) {
            return res.status(400).send('email is required')
        } else {
            email = email.trim();
        }

        if (!password) {
            return res.status(400).send('password is required')
        } else {
            password = password.trim();
        }

        if (!userName) {
            return res.status(400).send('userName is required')

        } else {
            userName = userName.trim();
        }
        const isExitsUser = await userModel.findOne({ email: email })
        if (isExitsUser) {
            return res.status(400).send('email already exits')
        }
        const newUser = {
            userName: userName,
            email: email,
            password: password
        }
        await userModel.create(newUser)
        res.status(200).send('tạo mới user thành công')

    } catch (error) {
        return res.status(400).send('not ok')

    }
}
const login = async (req, res) => {
    try {
        let { email, password } = req.body;

        if (!email) {
            return res.status(400).send('email is required')
        } else {
            email = email.trim();
        }

        if (!password) {
            return res.status(400).send('password is required')
        } else {
            password = password.trim();
        }
        const user = await userModel.findOne({ email: email })

        if (user.password !== password) {

            return res.status(400).send('Sai mật khẩu.');
        }



        const randomString = uuidv4();
        const resultLogin = `web-${user.id}$-${user.email}-${randomString}$`;

        return res.status(200).send(resultLogin);
    } catch (error) {
        console.log(error)
        return res.status(400).send('lỗi')
    }
}
export { register, login };