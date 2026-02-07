import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || '/api';

export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append('image', file);

  const response = await axios.post(`${API_URL}/upload`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
};

export const getImageByKey = async (key) => {
  const response = await axios.get(`${API_URL}/image/${key}`);
  return response.data;
};

export const getAllImages = async (page = 1, limit = 10) => {
  const response = await axios.get(`${API_URL}/images?page=${page}&limit=${limit}`);
  return response.data;
};
