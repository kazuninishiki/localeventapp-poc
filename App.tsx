import "./global.css"
import { useEffect } from "react"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './src/lib/queryClient'
import AppNavigator from './src/navigation/AppNavigator'
import { SafeAreaView  } from 'react-native-safe-area-context' //instead of react-native, depreciated 
import { initDatabase } from "./src/db/database"
import { useBookmarkStore } from "./src/features/bookmarks/bookmarkStore"

export default function App() {
  const loadBookmarks = useBookmarkStore(state => state.loadBookmarks)

  useEffect(() => {
    initDatabase()
    loadBookmarks()
  }, []) 
  
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={{ flex: 1 }}>
        <AppNavigator />
      </SafeAreaView>
    </QueryClientProvider>
  )
}