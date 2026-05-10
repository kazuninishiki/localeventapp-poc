import "./global.css"
import { useEffect } from "react"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './src/lib/queryClient'
import AppNavigator from './src/navigation/AppNavigator'
import { SafeAreaView  } from 'react-native-safe-area-context' //instead of react-native, depreciated 
import { initDatabase } from "./src/db/database"
import { useBookmarkStore } from "./src/features/bookmarks/bookmarkStore"
import { registerBackgroundFetch } from "./src/lib/backgroundFetch"

export default function App() {
  const loadBookmarks = useBookmarkStore(state => state.loadBookmarks)

  // initializes database, then load bookmarks, then register a background fetch thread for retrieving data in the background every 15 mins.
  useEffect(() => {
    initDatabase()
    loadBookmarks()
    registerBackgroundFetch()
  }, []) 
  
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={{ flex: 1 }}>
        <AppNavigator />
      </SafeAreaView>
    </QueryClientProvider>
  )
}