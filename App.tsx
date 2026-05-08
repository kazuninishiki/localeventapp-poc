import "./global.css"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './src/lib/queryClient'
import EventListScreen from './src/features/events/EventListScreen'
import { SafeAreaView } from 'react-native'

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <EventListScreen />
      </SafeAreaView>
    </QueryClientProvider>
  )
}