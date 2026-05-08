import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import { useEvents } from './useEvents'
import EventCard from '../../components/EventCard'

const EventListScreen = () => {
    const { data, isLoading, isError } = useEvents() 
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
                distance={0}
                onPress={() => {}}
            />
            )}
        />
        </View>
    )
}

export default EventListScreen