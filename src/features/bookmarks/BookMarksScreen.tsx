import React from 'react'
import { Text, View, FlatList } from 'react-native'

import { RootStackParamList } from '../../types/navigation'

import { useBookmarkStore } from '../bookmarks/bookmarkStore'

import { useEvents } from '../events/useEvents'
import EventCard from '../../components/EventCard'
import { getUserLocation, UserLocation } from '../../lib/location'
import { getDistance, formatDistance } from '../../lib/haversine'
import { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { formatDateTime } from '../../lib/formatDate'

type NavigationProp = NativeStackNavigationProp<RootStackParamList>

const BookMarksScreen = () => {
  const { data } = useEvents()
  const bookmarkedIds = useBookmarkStore(state => state.bookmarkedIds) 
  const bookmarkedEvents = data?.filter(e => bookmarkedIds.includes(e.id))
  const [userLocation, setUserLocation] = useState<UserLocation | null>(null)
    useEffect(() => {
    getUserLocation().then(setUserLocation)
  }, [])
  const navigation = useNavigation<NavigationProp>()
  if (bookmarkedEvents && bookmarkedEvents.length > 0) return (
        <View className="flex-1 bg-gray-100 p-4">
        <FlatList
            data={bookmarkedEvents}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
            <EventCard
                id={item.id}
                title={item.title}
                category={item.category}
                startTime={formatDateTime(item.time.startTime)}
                venueName={item.location.venueName}
                imageUrl={item.imageUrl}
                distance={userLocation ? 
                    formatDistance(
                        getDistance(
                            userLocation.latitude, 
                            userLocation.longitude, 
                            item.location.latitude, 
                            item.location.longitude)
                        )
                    : '...'
                } 
                onPress={() => navigation.navigate('EventDetail', { id: item.id })}
            />
            )}
        />
        </View>
    )
  if (bookmarkedEvents?.length === 0) return (
  <View className="flex-1 justify-center items-center">
    <Text>No bookmarks yet</Text>
  </View>
  )
}

export default BookMarksScreen