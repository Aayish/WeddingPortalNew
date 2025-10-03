import { QueryClient } from '@tanstack/react-query'

// Export the query client for use in other parts of the app
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
      retry: (failureCount, error: unknown) => {
        if (error && typeof error === 'object' && 'response' in error) {
          const response = (error as { response?: { status?: number } }).response
          if (response?.status && response.status >= 400 && response.status < 500) {
            return false
          }
        }
        return failureCount < 3
      },
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
    },
    mutations: {
      retry: 1,
    },
  },
})

// Error handling utility for React Query
export const handleQueryError = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message
  }
  
  // Handle axios errors
  if (typeof error === 'object' && error !== null && 'response' in error) {
    const axiosError = error as { response?: { data?: { message?: string }; statusText?: string } }
    if (axiosError.response?.data?.message) {
      return axiosError.response.data.message
    }
    if (axiosError.response?.statusText) {
      return axiosError.response.statusText
    }
  }
  
  return 'An unexpected error occurred'
}