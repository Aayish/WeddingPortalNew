import axios from 'axios'
import type { AxiosInstance, AxiosResponse, AxiosError } from 'axios'
import { API_CONFIG, DEFAULT_HEADERS, HTTP_STATUS } from '../config/api'

// Create axios instance with centralized configuration
const apiClient: AxiosInstance = axios.create({
  baseURL: API_CONFIG.FULL_URL,
  timeout: API_CONFIG.TIMEOUT,
  headers: DEFAULT_HEADERS,
})

// Request interceptor for adding auth tokens
apiClient.interceptors.request.use(
  (config) => {
    // Add auth token from localStorage if available
    const token = localStorage.getItem('auth_token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    
    // Log request in development
    if (import.meta.env.DEV) {
      console.log(`🚀 API Request: ${config.method?.toUpperCase()} ${config.url}`, {
        data: config.data,
        params: config.params,
      })
    }
    
    return config
  },
  (error) => {
    console.error('🚨 Request Error:', error)
    return Promise.reject(error)
  }
)

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    // Log response in development
    if (import.meta.env.DEV) {
      console.log(`✅ API Response: ${response.config.method?.toUpperCase()} ${response.config.url}`, {
        status: response.status,
        data: response.data,
      })
    }
    
    return response
  },
  (error: AxiosError) => {
    // Log error in development
    if (import.meta.env.DEV) {
      console.error(`❌ API Error: ${error.config?.method?.toUpperCase()} ${error.config?.url}`, {
        status: error.response?.status,
        message: error.message,
        data: error.response?.data,
      })
    }
    
    // Handle common error scenarios
    if (error.response) {
      const { status } = error.response
      
      switch (status) {
        case HTTP_STATUS.UNAUTHORIZED:
          // Handle unauthorized access - clear token and redirect to login
          localStorage.removeItem('auth_token')
          // You might want to redirect to login page here
          console.warn('Unauthorized access - token cleared')
          break
          
        case HTTP_STATUS.FORBIDDEN:
          console.warn('Access forbidden - insufficient permissions')
          break
          
        case HTTP_STATUS.NOT_FOUND:
          console.warn('Resource not found')
          break
          
        case HTTP_STATUS.INTERNAL_SERVER_ERROR:
          console.error('Server error - please try again later')
          break
          
        default:
          console.error(`HTTP Error ${status}: ${error.response.statusText}`)
      }
    } else if (error.request) {
      // Network error
      console.error('Network error - please check your connection')
    } else {
      // Other error
      console.error('Request setup error:', error.message)
    }
    
    return Promise.reject(error)
  }
)

// Helper function to handle API responses
export const handleApiResponse = <T>(response: AxiosResponse<T>): T => {
  return response.data
}

// Helper function to handle API errors
export const handleApiError = (error: AxiosError): never => {
  throw error
}

// Export the configured axios instance
export default apiClient

// Export types for use in other files
export type { AxiosResponse, AxiosError }