import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { message, notification } from 'antd'

interface IAxiosInstance {
	get(url: string, config?: AxiosRequestConfig): Promise<Record<string, any>>
	delete(url: string, config?: AxiosRequestConfig): Promise<Record<string, any>>
	post(url: string, data?: any, config?: AxiosRequestConfig): Promise<Record<string, any>>
	put(url: string, data?: any, config?: AxiosRequestConfig): Promise<Record<string, any>>
}

let loading = false
const httpInstance: IAxiosInstance & AxiosInstance = axios.create({
  timeout: 60000,
  // baseURL: CONFIG.http.baseURL
	headers: {
    'x-lang': 'cn',
  }
})

httpInstance.interceptors.request.use(async (config: AxiosRequestConfig) => {
  if (!loading) {
		loading = true;
  }
  return config;
});

httpInstance.interceptors.response.use((response) => {
  const {
    data: result
  }: any = response;
  if (loading) {
    loading = false;
  }
  if (!result.success) {
    return Promise.reject(new Error(result.msg));
  }
  return result;
}, (error) => {
  const response = error.response
  if (loading) {
    loading = false;
  }
  return Promise.reject(response);
});

export default httpInstance