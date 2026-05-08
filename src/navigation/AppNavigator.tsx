import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { RootStackParamList, TabParamList } from '../types/navigation'
import EventListScreen from '../features/events/EventListScreen'
import { View, Text } from 'react-native'
import React from 'react'

const AppNavigator = () => {
  return (
    <View>
      <Text>Events</Text>
      <Text>Bookmarks</Text>
    </View>
  )
}

export default AppNavigator