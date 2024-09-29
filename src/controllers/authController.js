import userModel from "../models/user.js";
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';


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
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds)
        const newUser = {
            userName: userName,
            email: email,
            password: hashedPassword
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
const listUser = async (req, res) => {
    try {
        const users = await userModel.find({})
        res.status(200).send(users);
    } catch (error) {
        res.status(400).send('lỗi')
    }

}
const resetPassword = async (req, res) => {
    try {
        let { email, newPassword } = req.body;
        if (!email) {
            return res.status(400).send('email is required')
        } else {
            email = email.trim();
        }
        if (!newPassword) {
            return res.status(400).send('newPassword is required')
        }
        else {
            newPassword = newPassword.trim();
        }
        const user = await userModel.findOne({ email: email })
        if (!user) {
            return res.status(400).send('user not found')
        }
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(newPassword, saltRounds);
        user.password = hashedPassword;
        await user.save();
        return res.status(200).send({ message: 'reset password succesfully', data: user })
    }
    catch (error) {
        console.error(error);
        res.status(400).send('lỗi')
    }
}
export { register, login, listUser, resetPassword };