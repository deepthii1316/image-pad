import express from 'express';
import { uploadImage, getImageByKey, getAllImages } from '../controllers/imageController.js';
import upload from '../middleware/upload.js';

const router = express.Router();

// Upload image
router.post('/upload', upload.single('image'), uploadImage);

// Get image by key
router.get('/image/:key', getImageByKey);

// Get all images (optional, for testing/admin)
router.get('/images', getAllImages);

export default router;
