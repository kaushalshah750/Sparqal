import { get, post } from './api.service';

const API_BASE = import.meta.env.VITE_API_BASE_URL + "/user";

export let userDetail = {}

export const registerUser = async (formData) => {
  const response = await post(`${API_BASE}/contact`, formData);
  return response.data;
};

export const loginUser = async (user) => {
  const response = await post(`${API_BASE}/login`, user)
  return response;
};

export const currentUser = async (user) => {
  const response = await get(`${API_BASE}/current`, user)
  return response.data;
};
