import axios from 'axios';

export const get = async (url) => {
    try{
        const response = await axios.get(url, {headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }});
        return response;
    } catch (error) {
        console.error('Failed to send contact form:', error);
        throw error;
    }
}

export const post = async (url, data) => {
    try{
        const response = await axios.post(url, data, {headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }});
        return response;
    } catch (error) {
        console.error('Failed to send contact form:', error);
        throw error;
    }
}

export const put = async (url, data) => {
    try{
        const response = await axios.put(url, data, {headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }});
        return response;
    } catch (error) {
        console.error('Failed to send contact form:', error);
        throw error;
    }
}

export const deleteApi = async (url) => {
    try{
        const response = await axios.delete(url, {headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }});
        return response;
    } catch (error) {
        console.error('Failed to send contact form:', error);
        throw error;
    }
}