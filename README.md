# Image Pad 📸

A production-ready MERN (MongoDB, Express, React, Node.js) web application that allows users to upload images to Cloudinary and retrieve them using a unique key stored in MongoDB.

## Features

- 🚀 **Fast Image Upload**: Upload images to Cloudinary with drag-and-drop support
- 🔑 **Unique Key Generation**: Each image gets a unique key for easy retrieval
- 💾 **MongoDB Storage**: Image metadata stored in MongoDB for quick access
- 🎨 **Clean React UI**: Beautiful, responsive interface built with React
- ⚡ **Fast Backend**: Node.js/Express backend with optimized performance
- 🔒 **Production Ready**: Includes error handling, validation, and security features

## Tech Stack

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **Cloudinary** for image storage
- **Multer** for file upload handling
- **CORS** enabled for cross-origin requests

### Frontend
- **React 18** with hooks
- **Vite** for fast development and building
- **Axios** for API requests
- **CSS3** with modern styling

## Prerequisites

Before running this application, make sure you have:

- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- Cloudinary account (free tier available at [cloudinary.com](https://cloudinary.com))

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/deepthii1316/image-pad.git
cd image-pad
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:

```env
PORT=5000
NODE_ENV=production
MONGODB_URI=mongodb://localhost:27017/image-pad
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
FRONTEND_URL=http://localhost:5173
```

Replace the Cloudinary credentials with your actual credentials from your Cloudinary dashboard.

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

## Running the Application

### Development Mode

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend: http://localhost:5000

### Production Mode

**Backend:**
```bash
cd backend
npm start
```

**Frontend (build and serve):**
```bash
cd frontend
npm run build
npm run preview
```

## API Endpoints

### Upload Image
```
POST /api/upload
Content-Type: multipart/form-data
Body: { image: File }
Response: { success: true, key: "abc123", url: "https://..." }
```

### Retrieve Image by Key
```
GET /api/image/:key
Response: { success: true, data: { key, url, format, width, height, uploadedAt } }
```

### Get All Images (Optional)
```
GET /api/images?page=1&limit=10
Response: { success: true, data: [...], pagination: {...} }
```

## Usage

1. **Upload an Image**:
   - Go to the "Upload" tab
   - Drag and drop an image or click to select one
   - Click "Upload Image"
   - Copy the unique key provided

2. **Retrieve an Image**:
   - Go to the "Retrieve" tab
   - Paste the unique key
   - Click "Retrieve" to view the image

## Project Structure

```
image-pad/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── cloudinary.js
│   │   │   └── database.js
│   │   ├── controllers/
│   │   │   └── imageController.js
│   │   ├── middleware/
│   │   │   ├── errorHandler.js
│   │   │   └── upload.js
│   │   ├── models/
│   │   │   └── Image.js
│   │   ├── routes/
│   │   │   └── imageRoutes.js
│   │   └── server.js
│   ├── .env.example
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ImageUpload.jsx
│   │   │   └── ImageRetrieve.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
└── README.md
```

## Security Features

- File type validation (images only)
- File size limit (5MB)
- CORS protection
- Environment variable protection
- Error handling middleware
- Input validation

## Deployment

### Backend Deployment (e.g., Railway, Render, Heroku)

1. Set environment variables in your hosting platform
2. Deploy the `backend` directory
3. Ensure MongoDB URI points to your production database
4. Update FRONTEND_URL to your production frontend URL

### Frontend Deployment (e.g., Vercel, Netlify)

1. Build the frontend: `npm run build`
2. Deploy the `dist` folder
3. Set environment variable `VITE_API_URL` to your backend API URL

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Cloudinary for image hosting
- MongoDB for database
- React and Vite teams for excellent developer tools
