import { get } from './api.service';

export const fetchTechnologies = async () => {
    try {
        const response = await get(`${import.meta.env.VITE_API_BASE_URL}/technology`);
        return response.data;
    } catch (error) {
        console.error("Failed to fetch technologies:", error);
        throw error;
    }
}