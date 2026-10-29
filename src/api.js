import axios from 'axios';
export const api = axios.create({ baseURL: import.meta.env.VITE_API_URL || '/api/v1', withCredentials: true });
api.interceptors.request.use((config) => { const csrf = document.cookie.split('; ').find(x => x.startsWith('csrfToken='))?.split('=')[1]; if (csrf && !['get','head','options'].includes((config.method || 'get').toLowerCase())) config.headers['x-csrf-token'] = decodeURIComponent(csrf); return config; });
export const messageOf = (err) => err?.response?.data?.error?.message || err?.message || 'Something went wrong. Please try again.';
