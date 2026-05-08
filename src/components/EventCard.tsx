import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import { formatDateTime } from '../lib/formatDate'

interface EventCardProps {
  id: string
  title: string
  category: string
  startTime: string
  venueName: string
  imageUrl: string
  distance: number
  onPress: () => void
  
}

const EventCard = ({ id, title, category, startTime, venueName, imageUrl, distance, onPress }: EventCardProps) => {
    return (
        <TouchableOpacity className="bg-white rounded-xl mb-4 overflow-hidden shadow-sm" onPress={onPress}> 
            <Image source={{ uri: imageUrl }} style={{ width: '100%', height: 150 }} />
            <View className="p-3">
                <Text className="text-base font-bold text-gray-900">{title}</Text>
                <Text>{category} • {formatDateTime(startTime)}</Text>
                <Text className="text-sm text-gray-500">{venueName} • {distance}</Text>
            </View>
        </TouchableOpacity>
    )
}


export default EventCard