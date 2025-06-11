import { toast } from "@/hooks/use-toast";

// Global error handler for uncaught errors
export const setupGlobalErrorHandling = () => {
  // Handle unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
    
    // Show user-friendly error message
    toast({
      title: "Something went wrong",
      description: "An unexpected error occurred. Please try refreshing the page.",
      variant: "destructive",
    });
    
    // Prevent the default browser behavior
    event.preventDefault();
  });

  // Handle uncaught JavaScript errors
  window.addEventListener('error', (event) => {
    console.error('Uncaught error:', event.error);
    
    // Only show toast for non-script errors to avoid spam
    if (!event.filename) {
      toast({
        title: "Application Error",
        description: "We encountered an issue. Please try again.",
        variant: "destructive",
      });
    }
  });
};

// API error handler with retry logic
export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public response?: any
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export const handleApiError = (error: any): string => {
  console.error('API Error:', error);

  if (error instanceof ApiError) {
    switch (error.status) {
      case 400:
        return 'Please check your input and try again.';
      case 401:
        return 'You need to be logged in to perform this action.';
      case 403:
        return 'You don\'t have permission to perform this action.';
      case 404:
        return 'The requested resource was not found.';
      case 429:
        return 'Too many requests. Please wait a moment and try again.';
      case 500:
        return 'Server error. Our team has been notified.';
      case 503:
        return 'Service temporarily unavailable. Please try again later.';
      default:
        return error.message || 'An unexpected error occurred.';
    }
  }

  if (error.name === 'NetworkError' || !navigator.onLine) {
    return 'Network connection lost. Please check your internet connection.';
  }

  if (error.name === 'TimeoutError') {
    return 'Request timed out. Please try again.';
  }

  return 'An unexpected error occurred. Please try again.';
};

// Retry function with exponential backoff
export const withRetry = async <T>(
  fn: () => Promise<T>,
  maxRetries: number = 3,
  baseDelay: number = 1000
): Promise<T> => {
  let lastError: Error;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error as Error;
      
      if (attempt === maxRetries) {
        throw lastError;
      }

      // Exponential backoff with jitter
      const delay = baseDelay * Math.pow(2, attempt - 1) + Math.random() * 1000;
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }

  throw lastError!;
};