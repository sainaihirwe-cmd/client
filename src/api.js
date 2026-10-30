import axios from 'axios';
const configuredApiUrl = import.meta.env.VITE_API_URL?.trim().replace(/\/+$/, '');
const apiBaseUrl = configuredApiUrl
  ? `${configuredApiUrl.replace(/\/api\/v1$/i, '')}/api/v1`
  : '/api/v1';
export const api = axios.create({ baseURL: apiBaseUrl, withCredentials: true });
api.interceptors.request.use((config) => { const token = sessionStorage.getItem('accessToken'); if (token) config.headers.Authorization = `Bearer ${token}`; const csrf = document.cookie.split('; ').find(x => x.startsWith('csrfToken='))?.split('=')[1]; if (csrf && !['get','head','options'].includes((config.method || 'get').toLowerCase())) config.headers['x-csrf-token'] = decodeURIComponent(csrf); return config; });
export const messageOf = (err) => err?.response?.data?.error?.message || err?.message || 'Something went wrong. Please try again.';
