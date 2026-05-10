import { ScrollView, StyleSheet, Text, View, ActivityIndicator, TouchableOpacity, Linking } from 'react-native'
import { RouteProp, useRoute } from '@react-navigation/native'
import { Image } from 'expo-image'
import { useEventById } from './useEvents'
import { RootStackParamList } from '../../types/navigation'
import { formatDateTime } from '../../lib/formatDate'
import { useBookmarkStore } from '../bookmarks/bookmarkStore'
import { Platform } from 'react-native'

// replace current Linking.openURL line:



const EventDetailScreen = ( ) => {
  const route = useRoute<RouteProp<RootStackParamList, 'EventDetail' >> ()
  const id = route.params.id
  const toggleBookmark = useBookmarkStore(state => state.toggleBookmark)
  const bookmarkedIds = useBookmarkStore(state => state.bookmarkedIds)
  const bookmarked = bookmarkedIds.includes(id)
  const { data, isLoading, isError } = useEventById(id) 

      if (isLoading) return (
          <View className='flex-1 justify-center items-center'>
          <ActivityIndicator size='large' />
          </View>
      )
      if (isError) return (
          <View className='flex-1 justify-center items-center'>
          <Text className='text-red-500'>Could not load event detail</Text>
          </View>
      )
      return (
        <ScrollView className='flex-1 bg-white'>
          <Image source={{ uri: data?.imageUrl }} style={{ width: '100%', height: 200}} />
          <View className='p-4'>
            <Text className='text-2xl font-bold text-gray-900' style={{ marginBottom: 8, lineHeight: 34 }}>{data?.title}</Text>
            <Text className='text-sm text-blue-500'>🏷️ {data?.category}</Text>
            <Text className='text-sm text-gray-500 mt-1'>🗓️ {formatDateTime(data?.time.startTime ?? '')} - {formatDateTime(data?.time.endTime ?? '')}</Text>
            <Text className='text-sm text-gray-500 mt-1'>🏢 {data?.location.venueName}</Text>
            <Text className='text-sm text-gray-500 mt-1'>📍 {data?.location.venueAddress}</Text>
            <Text className='text-sm text-gray-500 mt-1'>👤 {data?.organizer}</Text>
            <Text className='text-sm text-gray-700 mt-1'>🗒️ {data?.description}</Text>
            <TouchableOpacity
              className='bg-blue-600 rounded-xl p-4 mt-6'
              onPress={() => {
                const lat = data?.location.latitude
                const lng = data?.location.longitude
                const label = data?.location.venueName
                
                const url = Platform.select({
                  ios: `maps://?ll=${lat},${lng}&q=${label}`,
                  android: `geo:${lat},${lng}?q=${lat},${lng}(${label})`,
                  default: `https://maps.google.com/?q=${lat},${lng}`
                }) 
                if (url) Linking.openURL(url)
              }}
            ><Text className='text-center text-xl text-white mt-1'>📍 Open Maps</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className={`rounded-xl p-4 mt-3 border ${bookmarked ? 'bg-orange-600 border-orange-600' : 'bg-white border-blue-600'}`} 
              onPress={() => toggleBookmark(id)}
            >
            <Text className={`text-center font-bold text-xl ${bookmarked ? 'text-white' : 'text-blue-600'}`}> 
                {bookmarked ? '★ Bookmarked' : '☆ Click to Bookmark'}
            </Text>
            </TouchableOpacity>
              


          </View>
        </ScrollView>     
  )
}

export default EventDetailScreen

const styles = StyleSheet.create({})