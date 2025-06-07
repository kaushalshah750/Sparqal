import { get, post } from './api.service';

const API_BASE = import.meta.env.VITE_API_BASE_URL + "/contact";

export const sendContactForm = async (formData) => {
  try {
    const response = await post(API_BASE, formData);
    return response.data;
  } catch (error) {
    console.error('Failed to send contact form:', error);
    throw error;
  }
};

export const fetchContactLeads = async () => {
  try {
    const response = await get(API_BASE)
    return response.data;
  } catch (error) {
    console.error('Failed to send contact form:', error);
    throw error;
  }
};
