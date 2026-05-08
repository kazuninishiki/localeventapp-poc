import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,     // 5min — don't refetch if data is fresh enough
      gcTime: 10 * 60 * 1000,       // 10min — keep in cache after unused for a while
      retry: 2,                     // retry failed requests 2 times
      refetchOnWindowFocus: false,  // don't refetch when app comes to foreground
    }
  }
})