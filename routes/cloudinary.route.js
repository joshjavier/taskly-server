import express from 'express';
import { verifyToken } from '../libs/middleware.js';
import { addImage } from '../controllers/cloudinary.controller.js';

const router = express.Router();

router.post('/upload', verifyToken, addImage);

export default router;
