import express from 'express';
import { uploadImage, getImageByKey, getAllImages } from '../controllers/imageController.js';
import upload from '../middleware/upload.js';
import { uploadLimiter, retrieveLimiter, apiLimiter } from '../middleware/rateLimiter.js';

const router = express.Router();

// Upload image with rate limiting
router.post('/upload', uploadLimiter, upload.single('image'), uploadImage);

// Get image by key with rate limiting
router.get('/image/:key', retrieveLimiter, getImageByKey);

// Get all images with rate limiting (optional, for testing/admin)
router.get('/images', apiLimiter, getAllImages);

export default router;
