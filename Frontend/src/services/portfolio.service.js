import { get, post, put, deleteApi } from './api.service';

const API_BASE = import.meta.env.VITE_API_BASE_URL;

export const fetchPortfolio = async () => {
  try {
    const response = await get(`${API_BASE}/portfolio`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch portfolio:', error);
    throw error;
  }
};

export const addPortfolio = async (portfolioDetails) => {
  try {
    const response = await post(`${API_BASE}/portfolio`, portfolioDetails);
    return response.data;
  } catch (error) {
    console.error('Failed to add portfolio:', error);
    throw error;
  }
};

export const updatePortfolio = async (portfolioDetails) => {
  try {
    const response = await put(`${API_BASE}/portfolio/${portfolioDetails._id}`, portfolioDetails);
    return response.data;
  } catch (error) {
    console.error('Failed to add portfolio:', error);
    throw error;
  }
};

export const deletePortfolio = async (id) => {
  try {
    const response = await deleteApi(`${API_BASE}/portfolio/${id}`);
    return response.data;
  } catch (error) {
    console.error('Failed to delete portfolio:', error);
    throw error;
  }
};