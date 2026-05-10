import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { RootStackParamList } from '../../types/navigation'

import EventCard from '../../components/EventCard'
import { useEvents } from './useEvents'

import { getUserLocation, UserLocation } from '../../lib/location'
import { getDistance, formatDistance } from '../../lib/haversine'


type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'EventList'>

const EventListScreen = () => {
    const navigation = useNavigation<NavigationProp> ()
    const [userLocation, setUserLocation] = useState<UserLocation | null>(null)

    const { data, isLoading, isError } = useEvents() 
    useEffect(() => {
        getUserLocation().then(setUserLocation)
    }, [])
    if (isLoading) return (
        <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" />
        </View>
    )
    if (isError) return (
        <View className="flex-1 justify-center items-center">
        <Text className="text-red-500">Could not load events</Text>
        </View>
    )
    return (
        <View className="flex-1 bg-gray-100 p-4">
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
            <EventCard
                id={item.id}
                title={item.title}
                category={item.category}
                startTime={item.time.startTime}
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
}

export default EventListScreen