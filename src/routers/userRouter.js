import createPost from "../controllers/userController.js";
import express from 'express';
const router = express.Router();

router.post('/create-post', createPost)

// router.post('/login', login)

export default router;