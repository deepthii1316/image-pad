import { cloudinary } from '../config/cloudinary.js';
import Image from '../models/Image.js';
import crypto from 'crypto';

// Generate unique key for image
const generateUniqueKey = () => {
  return crypto.randomBytes(8).toString('hex');
};

// Upload image to Cloudinary
export const uploadImage = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        error: 'Please upload an image file'
      });
    }

    // Generate unique key with collision check
    let key;
    let attempts = 0;
    const maxAttempts = 10;
    
    while (attempts < maxAttempts) {
      key = generateUniqueKey();
      const existingImage = await Image.findOne({ key });
      if (!existingImage) {
        break;
      }
      attempts++;
    }
    
    if (attempts === maxAttempts) {
      throw new Error('Failed to generate unique key. Please try again.');
    }

    // Upload to Cloudinary
    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: 'image-pad',
          resource_type: 'auto'
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );

      uploadStream.end(req.file.buffer);
    });

    // Save to MongoDB
    const image = await Image.create({
      key,
      cloudinaryId: result.public_id,
      url: result.url,
      secureUrl: result.secure_url,
      format: result.format,
      width: result.width,
      height: result.height,
      bytes: result.bytes
    });

    res.status(201).json({
      success: true,
      key: image.key,
      url: image.secureUrl,
      message: 'Image uploaded successfully'
    });
  } catch (error) {
    next(error);
  }
};

// Get image by key
export const getImageByKey = async (req, res, next) => {
  try {
    const { key } = req.params;

    if (!key) {
      return res.status(400).json({
        success: false,
        error: 'Key parameter is required'
      });
    }

    const image = await Image.findOne({ key });

    if (!image) {
      return res.status(404).json({
        success: false,
        error: 'Image not found'
      });
    }

    res.status(200).json({
      success: true,
      data: {
        key: image.key,
        url: image.secureUrl,
        format: image.format,
        width: image.width,
        height: image.height,
        uploadedAt: image.createdAt
      }
    });
  } catch (error) {
    next(error);
  }
};

// Get all images (for admin/testing purposes)
export const getAllImages = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const images = await Image.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .select('key secureUrl format createdAt');

    const total = await Image.countDocuments();

    res.status(200).json({
      success: true,
      data: images,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    next(error);
  }
};
