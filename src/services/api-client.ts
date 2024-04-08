import axios, { AxiosError } from 'axios';
import router from '@/router';
import { RouteNames } from '@/router'; 

const apiClient = axios.create({
  baseURL: process.env.API_URL, 
});

apiClient.interceptors.response.use(
  response => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response?.status === 404) {
      router.push({ name: RouteNames.NOT_FOUND });
    }
    return Promise.reject(error);
  }
);

export default apiClient;
