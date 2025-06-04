// src/services/contact.service.js
import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_BASE_URL;

export const sendContactForm = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE}/contact`, formData);
    return response.data;
  } catch (error) {
    console.error('Failed to send contact form:', error);
    throw error;
  }
};
