import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
  key: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  cloudinaryId: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  secureUrl: {
    type: String,
    required: true
  },
  format: {
    type: String,
    required: true
  },
  width: {
    type: Number
  },
  height: {
    type: Number
  },
  bytes: {
    type: Number
  }
}, {
  timestamps: true
});

const Image = mongoose.model('Image', imageSchema);

export default Image;
