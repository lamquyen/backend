
import { register, login, listUser, resetPassword } from "../controllers/authController.js";
import express from 'express';
const router = express.Router();

router.post('/signup', register)
router.post('/login', login)
router.post('/reset-password', resetPassword)
router.get('/listUser', listUser)

// router.post('/login', login)

export default router;