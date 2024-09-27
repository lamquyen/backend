
import { register, login } from "../controllers/authController.js";
import express from 'express';
const router = express.Router();

router.post('/signup', register)
router.post('/login', login)

// router.post('/login', login)

export default router;