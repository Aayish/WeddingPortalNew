// API Configuration
// This file contains centralized configuration for REST API endpoints

// Environment variables for API configuration
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api'
const API_VERSION = import.meta.env.VITE_API_VERSION || 'v1'
const API_TIMEOUT = parseInt(import.meta.env.VITE_API_TIMEOUT || '10000')

// Construct full API URL
export const API_CONFIG = {
  BASE_URL: API_BASE_URL,
  VERSION: API_VERSION,
  TIMEOUT: API_TIMEOUT,
  FULL_URL: `${API_BASE_URL}/${API_VERSION}`,
} as const

// API Endpoints
export const API_ENDPOINTS = {
  // Venue endpoints
  VENUES: {
    LIST: '/venues',
    DETAILS: (id: string) => `/venues/${id}`,
    SEARCH: '/venues/search',
    FILTER: '/venues/filter',
  },
  
  // Caterer endpoints
  CATERERS: {
    LIST: '/caterers',
    DETAILS: (id: string) => `/caterers/${id}`,
    SEARCH: '/caterers/search',
  },
  
  // Photographer endpoints
  PHOTOGRAPHERS: {
    LIST: '/photographers',
    DETAILS: (id: string) => `/photographers/${id}`,
    SEARCH: '/photographers/search',
  },
  
  // Bridal makeup endpoints
  BRIDAL_MAKEUP: {
    LIST: '/bridal-makeup',
    DETAILS: (id: string) => `/bridal-makeup/${id}`,
    SEARCH: '/bridal-makeup/search',
  },
  
  // Bridal dress endpoints
  BRIDAL_DRESSES: {
    LIST: '/bridal-dresses',
    DETAILS: (id: string) => `/bridal-dresses/${id}`,
    SEARCH: '/bridal-dresses/search',
  },
  
  // User authentication endpoints
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REGISTER: '/auth/register',
    PROFILE: '/auth/profile',
    REFRESH: '/auth/refresh',
  },
  
  // Booking endpoints
  BOOKINGS: {
    CREATE: '/bookings',
    LIST: '/bookings',
    DETAILS: (id: string) => `/bookings/${id}`,
    UPDATE: (id: string) => `/bookings/${id}`,
    CANCEL: (id: string) => `/bookings/${id}/cancel`,
  },
  
  // Review endpoints
  REVIEWS: {
    CREATE: '/reviews',
    LIST: (serviceType: string, serviceId: string) => `/reviews/${serviceType}/${serviceId}`,
    UPDATE: (id: string) => `/reviews/${id}`,
    DELETE: (id: string) => `/reviews/${id}`,
  },
} as const

// Request headers configuration
export const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
} as const

// HTTP status codes for reference
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
} as const

// Filter types for different services
export interface SearchFilters {
  searchName?: string
  capacity?: string
  venueType?: string
  priceMin?: number
  priceMax?: number
  amenities?: string[]
  location?: string
}

export interface ServiceFilters extends Record<string, unknown> {
  search?: string
  category?: string
  location?: string
  priceRange?: [number, number]
  rating?: number
}

// Query keys for TanStack Query
export const QUERY_KEYS = {
  VENUES: {
    ALL: ['venues'] as const,
    LIST: (filters?: SearchFilters) => ['venues', 'list', filters] as const,
    DETAILS: (id: string) => ['venues', 'details', id] as const,
  },
  CATERERS: {
    ALL: ['caterers'] as const,
    LIST: (filters?: ServiceFilters) => ['caterers', 'list', filters] as const,
    DETAILS: (id: string) => ['caterers', 'details', id] as const,
  },
  PHOTOGRAPHERS: {
    ALL: ['photographers'] as const,
    LIST: (filters?: ServiceFilters) => ['photographers', 'list', filters] as const,
    DETAILS: (id: string) => ['photographers', 'details', id] as const,
  },
  BRIDAL_MAKEUP: {
    ALL: ['bridal-makeup'] as const,
    LIST: (filters?: ServiceFilters) => ['bridal-makeup', 'list', filters] as const,
    DETAILS: (id: string) => ['bridal-makeup', 'details', id] as const,
  },
  BRIDAL_DRESSES: {
    ALL: ['bridal-dresses'] as const,
    LIST: (filters?: ServiceFilters) => ['bridal-dresses', 'list', filters] as const,
    DETAILS: (id: string) => ['bridal-dresses', 'details', id] as const,
  },
  AUTH: {
    USER: ['auth', 'user'] as const,
    PROFILE: ['auth', 'profile'] as const,
  },
  BOOKINGS: {
    ALL: ['bookings'] as const,
    LIST: ['bookings', 'list'] as const,
    DETAILS: (id: string) => ['bookings', 'details', id] as const,
  },
  REVIEWS: {
    LIST: (serviceType: string, serviceId: string) => ['reviews', serviceType, serviceId] as const,
  },
} as const